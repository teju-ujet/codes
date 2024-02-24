import { Entity, model, property } from '@loopback/repository';

@model()
export class WeightHistory extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  userName: string;

  @property({
    type: 'date',
    required: true,
  })
  date: Date;

  @property({
    type: 'number',
    required: true,
  })
  weight: number;

  constructor(data?: Partial<WeightHistory>) {
    super(data);
  }
}
