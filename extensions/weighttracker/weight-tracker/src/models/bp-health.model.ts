import { Entity, model, property, belongsTo } from '@loopback/repository';
import { User } from './user.model';

@model()
export class BpHealth extends Entity {
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
  systolic_pressure: number;

  @property({
    type: 'number',
    required: true,
  })
  diastolic_pressure: number;

  @property({
    type: 'date',
    required: true,
  })
  measurement_date: Date;

  @belongsTo(() => User, { name: 'user' }) // Use a different name for the relation
  user_id: number; // Keep the property name as 'user_id' if it matches your database column name

  constructor(data?: Partial<BpHealth>) {
    super(data);
  }
}

export interface BpHealthRelations {
  // Describe navigational properties here
}

export type BpHealthWithRelations = BpHealth & BpHealthRelations;
