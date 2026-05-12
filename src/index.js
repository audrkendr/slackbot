// Documentation Followed: Bolt.js Initialization & Events
const { App } = require('@slack/bolt');
require('dotenv').config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN
});

app.event('app_mention', async ({ event, say }) => {
  await say(`Standup time! <@${event.user}>, what are your blockers today?`);
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('Audit Bot is live!');
})();