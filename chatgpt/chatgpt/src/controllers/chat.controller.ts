import { post, requestBody } from '@loopback/rest';
import axios from 'axios';
import { Chat } from '../models';

export class ChatController {
  private OPENAI_API_KEY = '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';
  private OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

  @post('/chat')
  async chat(@requestBody() request: Chat): Promise<Chat> {
    const { messages } = request;

    const data = {
      messages,
      max_tokens: 3000,
      temperature: 0.7,
      model: 'gpt-3.5-turbo',
    };

    const headers = {
      'Authorization': `Bearer ${this.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    };

    try {
      const apiResponse = await axios.post(this.OPENAI_API_URL, data, { headers });
      const completion = apiResponse.data.choices[0].message.content;

      request.response = completion;

      return request;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error && error.response.data.error.code === 'insufficient_quota') {
        // Handle quota exceeded error
        console.error('Quota exceeded. Please check your plan and billing details.');
        throw new Error('Quota exceeded. Please check your plan and billing details.');
      } else {
        console.error('Failed to process the request:', error.message);
        throw new Error('Failed to process the request.');
      }
    }
  }
}
