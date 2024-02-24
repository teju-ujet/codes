import { inject } from '@loopback/context';
import { Chatbot } from './chatbot';

export class ChatService {
  constructor(
    @inject('services.Chatbot') protected chatbot: Chatbot,
  ) {}

  async sendMessage(message: string): Promise<string> {
    return this.chatbot.sendMessage(message);
  }
}
