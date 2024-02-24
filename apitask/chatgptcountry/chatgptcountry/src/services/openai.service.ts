import { Configuration, OpenAIApi, CreateCompletionRequest, CreateCompletionResponse, CreateCompletionResponseChoicesInner } from 'openai';

export class OpenAIService {
  generateResponse(prompt: string) {
    throw new Error('Method not implemented.');
  }
  private openai: OpenAIApi;

  constructor(apiKey: string) {
    // Initialize the OpenAI API client
    const configuration = new Configuration({
      apiKey: apiKey,
    });
    this.openai = new OpenAIApi(configuration);
  }

  async generateText(prompt: string): Promise<string> {
    const request: CreateCompletionRequest = {
      model: 'text-davinci-003', // Update with your preferred model
      prompt: prompt,
      max_tokens: 100,
      temperature: 0.7,
      n: 1,
      stop: '\n',
    };

    const response = await this.openai.createCompletion(request);

    const completionResponse: CreateCompletionResponse = response.data;

    if (completionResponse.choices && completionResponse.choices.length > 0) {
      const firstChoice: CreateCompletionResponseChoicesInner = completionResponse.choices[0];
      const generatedText: string|undefined = firstChoice.text;

      // Handle the generated text, e.g., return it or perform further processing
      return generatedText||'';
    } else {
      // Handle the case when completionResponse.choices is undefined or empty
      // For example, return a default response or display an error message
      return 'Sorry, I could not generate a response.';
    }
  }
}
