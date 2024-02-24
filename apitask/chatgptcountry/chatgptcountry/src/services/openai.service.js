"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAIService = void 0;
const openai_1 = require("openai");
class OpenAIService {
    generateResponse(prompt) {
        throw new Error('Method not implemented.');
    }
    constructor(apiKey) {
        // Initialize the OpenAI API client
        const configuration = new openai_1.Configuration({
            apiKey: apiKey,
        });
        this.openai = new openai_1.OpenAIApi(configuration);
    }
    async generateText(prompt) {
        const request = {
            model: 'text-davinci-003',
            prompt: prompt,
            max_tokens: 100,
            temperature: 0.7,
            n: 1,
            stop: '\n',
        };
        const response = await this.openai.createCompletion(request);
        const completionResponse = response.data;
        if (completionResponse.choices && completionResponse.choices.length > 0) {
            const firstChoice = completionResponse.choices[0];
            const generatedText = firstChoice.text;
            // Handle the generated text, e.g., return it or perform further processing
            return generatedText || '';
        }
        else {
            // Handle the case when completionResponse.choices is undefined or empty
            // For example, return a default response or display an error message
            return 'Sorry, I could not generate a response.';
        }
    }
}
exports.OpenAIService = OpenAIService;
//# sourceMappingURL=openai.service.js.map