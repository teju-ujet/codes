// index.js
const express = require('express');
const axios = require('axios');
const { Chat } = require('./models');

const app = express();
const PORT = 3000;

app.use(express.json());

const OPENAI_API_KEY = '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';
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

app.post('/chat', async (req, res) => {
  const { messages } = req.body;

  const data = {
    messages,
    max_tokens: 3000,
    temperature: 0.7,
    model: 'gpt-3.5-turbo',
  };

  const headers = {
    'Authorization': `Bearer ${OPENAI_API_KEY}`,
    'Content-Type': 'application/json',
  };

  try {
    const apiResponse = await axios.post(OPENAI_API_URL, data, { headers });
    const completion = apiResponse.data.choices[0].message.content;

    const chat = new Chat(messages);
    chat.response = completion;

    res.json(chat);
  } catch (error) {
    console.error(error.response.data);
    res.status(500).json({ error: 'Failed to process the request.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${3000}`);
});
