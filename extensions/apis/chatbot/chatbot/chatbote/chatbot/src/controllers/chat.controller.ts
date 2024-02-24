import {post, requestBody} from '@loopback/rest';
import {ChatGPT} from './chatgpt';

export class ChatController {
  constructor() {}

  @post('/chat')
  async chat(@requestBody() requestBody: {message: string}): Promise<string> {
    const message = requestBody.message;

    // Generate a response using ChatGPT
    const response = await ChatGPT.generateResponse(message);

    return response;
  }
}
