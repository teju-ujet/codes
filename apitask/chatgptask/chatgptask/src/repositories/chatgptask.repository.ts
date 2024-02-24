import {inject} from '@loopback/core';
import {DefaultCrudRepository,juggler} from '@loopback/repository';
import {QuestionsDataSource} from '../datasources';
import {Chatgptask, ChatgptaskRelations} from '../models';
import * as openai from 'openai';

export class ChatgptaskRepository extends DefaultCrudRepository<
  Chatgptask,
  typeof Chatgptask.prototype.question,
  ChatgptaskRelations
> {
  constructor(
    @inject('datasources.questions') dataSource: QuestionsDataSource,
  ) {
    super(Chatgptask, dataSource);
  }

  async generateText(): Promise<string> {
    const prompt = 'Hello, World!';
    const maxTokens = 50;
    const apiKey = process.env.OPENAI_API_KEY;
    const response = await openai.Completions.create({
      engine: 'text-davinci-003',
      prompt,
      max_tokens: maxTokens,
    });
    return response.choices?.[0].text ?? '';
  }
  
  }

