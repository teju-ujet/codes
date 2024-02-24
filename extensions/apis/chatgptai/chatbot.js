// chatbot.js
const openai = require('openai');
const { OPENAI_API_KEY, MODEL_NAME } = require('./config');

const chatbot = new openai.LanguageCompletion({
  apiKey: OPENAI_API_KEY,
  model: MODEL_NAME,
});

let conversationId = null;

async function sendMessage(message) {
  const response = await chatbot.complete({
    documents: [message],
    max_tokens: 50,
    stop: '\n',
    context: conversationId ? { id: conversationId } : undefined,
  });

  conversationId = response.choices[0].context.id;
  return response.choices[0].text.trim();
}

module.exports = { sendMessage };
