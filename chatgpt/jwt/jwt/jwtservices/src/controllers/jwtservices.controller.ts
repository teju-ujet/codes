import { post, requestBody, get } from '@loopback/rest';
import axios from 'axios';
import { JwtService } from '../services/jwt-services';
import { AuthenticationBindings, authenticate } from '@loopback/authentication';
import { inject } from '@loopback/core';
import { UserProfile } from '@loopback/security';
export class JwtController {
  private OPENAI_API_KEY = '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';
  private OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';
  private jwtService: JwtService;

  constructor() {
    const secretKey = generateRandomKey();
    this.jwtService = new JwtService(secretKey);
  }

  @post('/chatapi', {
    responses: {
      '200': {
        description: 'Chat response',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                token: { type: 'string' },
                response: { type: 'string' },
              },
            },
          },
        },
      },
    },
  })
  async chat(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              prompt: {
                type: 'string',
              },
            },
            required: ['prompt'],
          },
        },
      },
    })
    requestBody: { prompt: string },
  ): Promise<any> {
    const { prompt } = requestBody;
    const messages = [
      { role: 'system', content: 'You are an admin' },
      { role: 'user', content: prompt },
    ];

    try {
      // Generate a token
      const token = this.jwtService.generateToken();

      // Log the received messages to the terminal
      console.log('Received messages:', messages);

      const data = {
        messages,
        max_tokens: 3000,
        temperature: 0.7,
        model: 'gpt-3.5-turbo',
      };

      const headers = {
        Authorization: `Bearer ${this.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      };

      const apiResponse = await axios.post(this.OPENAI_API_URL, data, { headers });

      const responseData = apiResponse.data;
      console.log('Response Data:', responseData);

      const completion = responseData.choices[0];
      console.log('Completion:', completion);

      if (completion && completion.finish_reason === 'stop') {
        const jsonResponse = completion.message.content;
        // Log the response message to the terminal
        console.log('Response:', jsonResponse);
        return { token };
      } else {
        console.error('Invalid completion:', completion);
        throw new Error('Failed to process the response.');
      }
    } catch (error) {
      if (error.response) {
        console.error('Error:', error.response.data);
        throw new Error('Failed to process the request.');
      } else if (error.request) {
        console.error('No response received:', error.message);
        throw new Error('No response received from the server.');
      } else {
        console.error('Error:', error.message);
        throw new Error('An error occurred while making the request.');
      }
    }
  }

  @get('/authenticate')
  @authenticate('jwt')
  async me(): Promise<any> {
    // Return any additional information related to the authenticated user
    return { message: 'Authenticated user' };
  }
}

function generateRandomKey(): string {
  // Generate a random secret key using your preferred method
  const key = 'Heiut464155urcmkbklfyjk541eds';
  return key;
}
