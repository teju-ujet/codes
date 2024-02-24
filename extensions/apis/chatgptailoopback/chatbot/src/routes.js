// src/routes.js
module.exports = function(app) {
    // ...
    const ChatbotController = require('./controllers/chatbot.controller');
    app.post('/chat', ChatbotController.converse);
  };
  