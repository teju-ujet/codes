// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {get, param} from '@loopback/rest';
import {OpenAIService} from '../services/openai.service';
export class QuestionController {
  constructor(
    @inject('services.OpenAIService')
    private OpenAIService: OpenAIService,
  ) {}
  @get('/questions/{question}')
  async getAnswer(@param.path.string('question') question: string) {
    const answer = await this.OpenAIService.generateAnswer(question);
    return {question, answer};
  }
}
