import { Entity, model, property, belongsTo } from '@loopback/repository';
import { User } from './user.model';

@model()
export class WeightHistory extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  weight: number;

  @property({
    type: 'date', // Change the type to 'date' to represent the createdAt date
    required: true,
  })
  createdAt: Date; // Change the property name to 'createdAt'

  @belongsTo(() => User)
  userId: number;

  constructor(data?: Partial<WeightHistory>) {
    super(data);
  }
}

export interface WeightHistoryRelations {
  // Define required relations here
}

export type WeightHistoryWithRelations = WeightHistory & WeightHistoryRelations;
