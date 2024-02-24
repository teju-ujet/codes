import axios, { AxiosResponse } from 'axios';

export class DatabaseService {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async fetchData(question: string): Promise<string> {
    // Add your database query logic here

    // Generate an answer using OpenAI GPT-3
    const response: AxiosResponse<any> = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt: question,
        max_tokens: 100,
        temperature: 0.7,
        n: 1,
        stop: '\n',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.apiKey}`,
        },
      }
    );

    // Extract the answer from the OpenAI response
    const answer: string = response.data.choices[0].text.trim();

    return answer;
  }
}

// Usage
(async () => {
  const apiKey = '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';
  const databaseService = new DatabaseService(apiKey);

  const question = 'What is the capital of France?';
  const answer = await databaseService.fetchData(question);
  console.log(answer);
})();
