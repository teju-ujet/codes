import openai from 'openai';

export class ChatGPT {
  private chatbot: openai.LanguageCompletion;
  static generateResponse: any;

  constructor(apiKey: string) {
    this.chatbot = new openai.LanguageCompletion({
      apiKey: apiKey,
      model: 'text-davinci-003',
    });
  }

  async generateResponse(message: string): Promise<string> {
    const response = await this.chatbot.complete({
      documents: [message],
      maxTokens: 50,
      stop: '\n',
    });

    return response.choices[0].text.trim();
  }
}
