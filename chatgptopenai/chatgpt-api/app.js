const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

// Define a route to handle incoming chat messages
app.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    // Make a request to the ChatGPT API
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      prompt: message,
      max_tokens: 50, // Adjust the response length as per your requirements
      temperature: 0.6, // Adjust the temperature for response randomness
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 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`, // Replace with your ChatGPT API key
      },
    });

    // Return the generated response
    res.json({ reply: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Start the server
const port = 5000; // Choose the desired port number
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
