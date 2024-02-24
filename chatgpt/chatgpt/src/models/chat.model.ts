/* The above code defines two classes, Message and Chat, for modeling messages and chat conversations
in a TypeScript application. */
import { Entity, model, property } from '@loopback/repository';
@model()
export class Message extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  role: string;

  @property({
    type: 'string',
    required: true,
  })
  content: string;

  constructor(data?: Partial<Message>) {
    super(data);
  }
}

@model()
export class Chat extends Entity {
  @property({
    type: 'array',
    itemType: Message,
    required: true,
  })
  messages: Message[];

  @property({
    type: 'string',
  })
  response?: string;

  constructor(data?: Partial<Chat>) {
    super(data);
  }
}
