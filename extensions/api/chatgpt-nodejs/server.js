require ('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
require ('openai');

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.post('/api', async (req, res) => {
  const message = req.body.message;

  // Send the message to ChatGPT API and get the response
  const data = {
    prompt: message,
    max_tokens: 500, // Adjust the number of tokens as needed
    temperature: 0.7,
    model: 'gpt-3.5-turbo', // Adjust the temperature as needed
  };
  const header = {
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', data, {header});

  const completion = response.data.choices[0].text.trim();
   return completion;

  // res.json({ message: completion });
} catch {error}{
  console.log(error);
}

  

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
});
});