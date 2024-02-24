import {Entity, model, property} from '@loopback/repository';

@model()
export class Chatgptask extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  question: string;

  @property({
    type: 'string',
  })
  answers?: string;


  constructor(data?: Partial<Chatgptask>) {
    super(data);
  }
}

export interface ChatgptaskRelations {
  // describe navigational properties here
}

export type ChatgptaskWithRelations = Chatgptask & ChatgptaskRelations;
