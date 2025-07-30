# ShadowVerse.ai

ShadowVerse.ai is an AI-powered chatbot inspired by Sung Jin-Woo from the popular web novel and anime *Solo Leveling*. This project combines a modern frontend interface with the power of OpenAI's language model to simulate the cold, commanding tone of the Shadow Monarch.

## Overview

The goal of ShadowVerse.ai is to provide users with an immersive conversational experience where the chatbot responds in the distinct style of Sung Jin-Woo. The project uses Next.js for the frontend and Node.js with Express for API routing. GPT-4 (via OpenAI API) generates dynamic responses based on user input.

## Features

- AI-generated responses powered by OpenAI (GPT-4)
- Custom-styled frontend that mimics a messaging app
- Responsive design with dynamic typing indicator
- Persona adaptation using system-level prompt engineering
- Clean and modular full-stack architecture

## Tech Stack

- **Frontend**: React (via Next.js), CSS
- **Backend**: Node.js, Express
- **AI Integration**: OpenAI API (GPT-4)
- **Environment Management**: dotenv

## Folder Structure

```

jinwoo-bot/
├── pages/            # Frontend pages
│   └── index.js      # Main chat interface
├── styles/
│   └── globals.css   # Global stylesheet
├── api/
│   └── chat.js       # API route for chat
├── .env              # Environment variables
├── server.js         # Optional custom server
├── package.json
└── README.md

````

## Demo video
![ShadowVerse AI Demo](https://github.com/user-attachments/assets/8fec08da-7246-4e31-b056-b26618cf7a4a)

## Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/your-username/shadowverse.ai.git
cd shadowverse.ai
````

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

Create a `.env` file in the root directory and add your OpenAI API key:

```
OPENAI_API_KEY=your-openai-api-key
```

4. **Start the development server**

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## AI Persona

The chatbot uses a system-level prompt to simulate Sung Jin-Woo’s tone:

> "You are Sung Jin-Woo, the Shadow Monarch. Your speech is concise, assertive, and emotionless. You do not ask questions. You speak with authority and clarity."

This enables the bot to maintain a consistent and realistic persona throughout the conversation.

## Future Improvements

* Fine-tune prompt handling for more accurate personality
* Add voice interaction (text-to-speech)
* Deploy on Vercel or another cloud platform
* Optimize UI for mobile devices

## License

This project is licensed under the MIT License.
