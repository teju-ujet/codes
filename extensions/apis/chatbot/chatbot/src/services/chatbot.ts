import { inject } from '@loopback/context';
import { config as appConfig } from '../config';
import openai from 'openai';

interface Config {
  OPENAI_API_KEY: string;
}

export class Chatbot {
  private openai: any;

  constructor(
    @inject('config') protected chatbotConfig: Config = appConfig,
  ) {
    const { OPENAI_API_KEY } = this.chatbotConfig;
    this.openai = openai;
    this.openai.apiKey = OPENAI_API_KEY;
  }

  async sendMessage(message: string): Promise<string> {
    const payload: any = {
      engine: 'text-davinci-003',
      prompt: message,
      maxTokens: 50,
    };

    const response: any = await this.openai.complete(payload);

    return response.choices[0].text.trim();
  }
}
