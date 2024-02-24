import {Entity, model, property} from '@loopback/repository';

@model()
export class Message extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  content: string;


  constructor(data?: Partial<Message>) {
    super(data);
  }
}

export interface MessageRelations {
  // describe navigational properties here
}

export type MessageWithRelations = Message & MessageRelations;
