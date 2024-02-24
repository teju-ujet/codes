/// src/controllers/chatbot.controller.js
const { sendMessage } = require('../openai');

class ChatbotController {
  async converse(message) {
    try {
      const response = await sendMessage(message);
      return { message: response };
    } catch (error) {
      console.error('Error:', error.message);
      throw new Error('Internal server error');
    }
  }
}

module.exports = ChatbotController;
