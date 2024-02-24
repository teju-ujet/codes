import { post,get, requestBody } from '@loopback/rest';
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
      model: 'gpt-3.5-turbo-0613',
    };

    const headers = {
      'Authorization': `Bearer ${this.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    };

    try {
      const apiResponse = await axios.post(this.OPENAI_API_URL, data, { headers });
      const responseData = apiResponse.data;
      console.log('Response Data:', responseData);

      const completion = responseData.choices[0];
      console.log('Completion:', completion);

      /* The `if (completion && completion.finish_reason === 'stop')` condition is checking if the
      completion response from the OpenAI API is valid and if the completion process has finished
      successfully. */
      if (completion && completion.finish_reason === 'stop') {
        //const jsonResponse = completion.message.content;
        const jsonResponse = JSON.parse(completion.message.content);
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

  @post('/dietplan2', {
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
  async chat1(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              calorie_goal: {
                type: 'number',
              },
              cuisine_types: {
                type: 'string',
              },
              diet_type: {
                type: 'string',
              },
              allergies: {
                type: 'string',
              },
              include_list: {
                type: 'string',
              },
              exclude_list: {
                type: 'string',
              },
            },
            required: ['calorie_goal', 'cuisine_types', 'diet_type', 'allergies', 'include_list', 'exclude_list'],
          },
        },
      },
    })
    
    requestBody: {
      calorie_goal: number;
      cuisine_types: string;
      diet_type: string;
      allergies: string;
      include_list: string;
      exclude_list: string;
    }
  ): Promise<any> {
    const {
      calorie_goal,
      cuisine_types,
      diet_type,
      allergies,
      include_list,
      exclude_list
    } = requestBody;//By doing this, the code can conveniently access the values of these properties and use them to construct the prompt for generating a food plan using the OpenAI API.
    const prompt = `Create a 7-day food plan with a daily caloric target of ${calorie_goal} for the user RD.\n`
      + `The individual consumes ${cuisine_types} types and adheres to a ${diet_type} diet.\n`
      + `The person has a ${allergies} allergy.\n`
      + `${include_list} are included; omit the ${exclude_list}.\n`
      + `Provide the total number of calories, carbs, fat, and proteins for each meal and for each day.\n`
      + `Daily meals should include breakfast, lunch, a snack, and dinner.The output should be produced in the following JSON format`;
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
      'Authorization': `Bearer ${this.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    };

    try {
      const apiResponse = await axios.post(this.OPENAI_API_URL, data, { headers });
      const responseData = apiResponse.data;
      console.log('Response Data:', responseData);

      const completion = responseData.choices[0];//calling from address 0 of  array and The choices array contains the generated completions from the OpenAI API
      console.log('Completion:', completion);
      if (completion && completion.finish_reason === 'stop') {// this conditon is checking if the completion response from opeai api 
        const jsonResponse = completion.message.content;
        //const jsonResponse = JSON.parse(completion.message.content);
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
