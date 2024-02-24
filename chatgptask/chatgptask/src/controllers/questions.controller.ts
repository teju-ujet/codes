// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';
import { repository } from '@loopback/repository';
import { get } from '@loopback/rest';
import { ChatgptaskRepository } from '../repositories';
export class QuestionsController {
  constructor(
    @repository(ChatgptaskRepository )
    public chatgptaskRepository : ChatgptaskRepository ,
  ) {}

  @get('/generateText')
async generateText(): Promise<string> {
  return this.chatgptaskRepository.generateText();
}  
}
