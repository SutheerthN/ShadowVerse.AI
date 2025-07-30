const axios = require('axios');
require('dotenv').config();

async function getJinWooResponse(userMessage) {
  const apiKey = process.env.OPENAI_API_KEY;

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `You are Sung Jin-Woo from Solo Leveling. Respond like the Shadow Monarch — confident, stoic, and commanding. Speak in short, powerful sentences. Your tone is cold but respectful, full of authority. You’ve seen death and risen above it.`
        },
        {
          role: 'user',
          content: userMessage,
        },
      ],
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data.choices[0]?.message?.content || 'The Shadow remains silent.';
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

module.exports = { getJinWooResponse };
