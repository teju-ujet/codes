import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class questions extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  Question: string;

  @property({
    type: 'string',
    required:true,
  })
  Answers: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<questions>) {
    super(data);
  }
}

export  interface OpenaiRelations {
  // describe navigational properties here

}
export type OpenaiWithRelations = questions& OpenaiRelations;

