# Standup Bot: A DX Case Study

> This repository serves as a technical case study and functional tool built with Slack Bolt framework. The project implements a simple "Standup Bot" to evaluate the onboarding journey, authentication patterns, and API integration workflows for developers.

## 🔍 DX Observations & Feedback

During the implementation of this project, I identified opportunities to enhance the developer onboarding experience. These observations are framed with the goal of minimizing time-to-integration for new users.

| Observation                            | Recommended Enhancement                                                                                                                                                                                                                                                                                                                                                          |
| :------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Authentication Flow**                | The getting-started guides instruct developers to run code utilizing SLACK_BOT_TOKEN, but the steps to generate this token (specifically, installing the app to a workspace) are decoupled from the code initialization page.                                                                                                                                                    |
| **Onboarding Guidance**                | The necessity of `/invite @botname` is a common hurdle. Adding a "Check your bot's visibility" step in the tutorial would provide proactive guidance.                                                                                                                                                                                                                            |
| **Environment Variable OS Mismatches** | Command-line examples for exporting environment variables default strictly to POSIX syntax (export VAR=value). Developers working on Windows (PowerShell/CMD) are left copy-pasting commands that fail silently or throw command-not-found syntax errors.                                                                                                                        |
| **Manifest File Clarity**              | The instructions refer to copying a pre-defined manifest file while not providing clear context. Although a there is an additional document with an app manifest reference, it is overloaded with many metadata fields that do not apply to this project. It could be easier to have an example file tailored to this task provided or more detailed context on how to make one. |

## Project Architecture

This project utilizes a clean separation between infrastructure configuration (App Manifest) and application logic.

- **`manifest.yml`**: Uses Slack's App Manifest feature to define application permissions as code, ensuring reproducible environments.
- **`src/index.js`**: Implements the Bolt.js framework for event-driven logic, demonstrating best practices in modular API development.

## Installation and Setup

To run this bot locally, ensure you have [Node.js](https://nodejs.org/) installed, then follow these steps:

1. **Clone the repository:**
   '''bash git clone [your-repo-url]
   cd standup-bot
   '''

2. **Install Dependencies**
   '''
   npm install @slack/bolt dotenv
   '''
3. **Configure Environment Variables:**
   Create a .env file in the root directory and add your Slack credentials:
   '''
   SLACK_BOT_TOKEN=xoxb-...
   SLACK_SIGNING_SECRET=...
   SLACK_APP_TOKEN=xapp-...
   '''
4. **Launch the bot:**
   ''' node src/index.js '''

## Learning Outcomes

This audit demonstrates the power of utilizing modern API tooling like Slack’s App Manifest and the Bolt SDK to reduce boilerplate. It also highlights the critical role of "human-in-the-loop" documentation—ensuring that even when the code is correct, the developer's journey remains intuitive and supported.

[Here](https://medium.com/@audrkendr/case-study-the-15-minute-slack-bot-challenge-c7cdfd2afe19) is a Medium article that explores this audit in further detail.
