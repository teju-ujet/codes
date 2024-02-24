// src/openai.js
const axios = require('axios');
const { OPENAI_API_KEY } = require('../config');

const openai = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    Authorization: `Bearer ${OPENAI_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

async function sendMessage(message) {
  const response = await openai.post('/engines/davinci-codex/completions', {
    prompt: message,
    max_tokens: 50,
    temperature: 0.6,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return response.data.choices[0].text.trim();
}

module.exports = { sendMessage };
