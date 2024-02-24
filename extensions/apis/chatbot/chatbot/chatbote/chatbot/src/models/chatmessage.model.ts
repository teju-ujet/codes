import {Entity, model, property} from '@loopback/repository';

@model()
export class Chatmessage extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  message: string;


  constructor(data?: Partial<Chatmessage>) {
    super(data);
  }
}

export interface ChatmessageRelations {
  // describe navigational properties here
}

export type ChatmessageWithRelations = Chatmessage & ChatmessageRelations;
