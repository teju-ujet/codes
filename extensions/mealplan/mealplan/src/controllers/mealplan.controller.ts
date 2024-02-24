import { post, requestBody } from '@loopback/rest';
import axios from 'axios';
export class FoodPlanController {
  private OPENAI_API_KEY = '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';
  private OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';
  constructor() {}
  @post('/dietplan', {
    responses: {
      '200': {
        description: 'Chat response',
        content: {
          'application/json': {
            schema: {
              type: 'object',
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
    requestBody: { prompt: string }
  ): Promise<any> {
    const { prompt } = requestBody;

    const messages = [
      { role: 'system', content: 'You are a dietitian.' },
      { role: 'user', content: prompt },
    ];

    const data = {
      messages,
      max_tokens: 3000,
      temperature: 0.7,
      model: 'gpt-3.5-turbo',
    };

    const headers = {
      'Authorization':`Bearer ${this.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    };

    try {
      const apiResponse = await axios.post(this.OPENAI_API_URL, data, { headers });
      const responseData = apiResponse.data;
      console.log('Response Data:', responseData);

      const completion = responseData.choices[0];
      if (completion && completion.finish_reason === 'stop') {
        const jsonResponse = JSON.parse(completion.message.content);//after defining this json.parse in the code if we give promt normally it wont execute and it shows error
        //in the promt we have define as to provide output in json format
        return jsonResponse;
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
}
