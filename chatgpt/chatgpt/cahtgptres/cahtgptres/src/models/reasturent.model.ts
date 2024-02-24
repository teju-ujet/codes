import {Entity, model, property} from '@loopback/repository';

@model()
export class Reasturent extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  ratings: number;


  constructor(data?: Partial<Reasturent>) {
    super(data);
  }
}

export interface ReasturentRelations {
  // describe navigational properties here
}

export type ReasturentWithRelations = Reasturent & ReasturentRelations;
