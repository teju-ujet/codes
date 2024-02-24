// server.js
const express = require('express');
const { sendMessage } = require('./chatbot');

const app = express();
app.use(express.json());

app.post('/chat', async (req, res) => {
  const message = req.body.message;

  if (!message) {
    res.status(400).json({ error: 'Message is required' });
    return;
  }

  try {
    const response = await sendMessage(message);
    res.json({ message: response });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
