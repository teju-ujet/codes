import {Entity, model, property} from '@loopback/repository';

@model()
export class Chat extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
    required: true,
  })
  class: string;


  constructor(data?: Partial<Chat>) {
    super(data);
  }
}

export interface ChatRelations {
  // describe navigational properties here
}

export type ChatWithRelations = Chat & ChatRelations;
