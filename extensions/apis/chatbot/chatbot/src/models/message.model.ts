import {Entity, model, property} from '@loopback/repository';

@model()
export class Message extends Entity {
  @property({
    message: 'string',
    id: true,
    required: true,
  })
  text: string;


  constructor(data?: Partial<Message>) {
    super(data);
  }
}


