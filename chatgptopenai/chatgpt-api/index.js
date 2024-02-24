const express = require('express');
const { OpenAI } = require('openai');

const app = express();
const port = 3000;

// Configure OpenAI API credentials
const openai = new OpenAI('YOUR_OPENAI_API_KEY');

app.use(express.json());

// Handle POST requests to '/chat' endpoint
app.post('/chat', async (req, res) => {
  const { message } = req.body;

  // Send the message to ChatGPT
  const completion = await openai.complete({
    engine: 'davinci',
    prompt: message,
    maxTokens: 50,
    temperature: 0.6,
    n: 1,
    stop: '\n',
  });

  const reply = completion.choices[0].text.trim();

  // Send the reply back to the client
  res.json({ reply });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
