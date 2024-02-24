import { post, requestBody } from '@loopback/rest';
import { inject } from '@loopback/context';
import { ChatService } from '../services/chat.service';

export class ChatController {
  constructor(
    @inject('services.ChatService') protected chatService: ChatService,
  ) {}

  @post('/chat')
  async chat(@requestBody() message: string): Promise<object> {
    const response = await this.chatService.sendMessage(message);
    return { message: response };
  }
}
