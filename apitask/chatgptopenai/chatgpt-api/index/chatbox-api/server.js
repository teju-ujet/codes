const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Replace 'YOUR_API_KEY' with your actual OpenAI API key
const apiKey = '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';

app.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: message }],
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    const reply = response.data.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error('Failed to generate chat response:', error);
    res.status(500).json({ error: 'Failed to generate chat response' });
  }
});

const PORT = 8000; // Change this to the desired port number
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
