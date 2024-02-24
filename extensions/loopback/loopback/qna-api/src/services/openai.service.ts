import { BindingKey, inject, injectable } from '@loopback/core';
import axios from 'axios';

injectable()
export class OpenAIService {
  constructor(private apiKey: string) {}

  async generateAnswer(question: string): Promise<string> {
    const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';
    const response = await axios.post(
      apiUrl,
      {
        prompt: question,
        max_tokens: 100,
      },
      {
        headers: {
          'Authorization': `Bearer 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${this.apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.choices[0]?.text.trim() || '';
  }
}
