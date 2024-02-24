import { Entity, model, property, hasMany } from '@loopback/repository';
import { WeightHistory } from './weight-history.model';
import { Sugar } from './sugar.model';
import { BpHealth } from './bp-health.model';

@model()
export class User extends Entity {
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
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'number',
    required: true,
  })
  phone_number: number;

  @hasMany(() => WeightHistory, { keyTo: 'user_id' })
  weightHistory: WeightHistory[];

  @hasMany(() => Sugar, { keyTo: 'user_id' })
  sugars: Sugar[];

  @hasMany(() => BpHealth, { keyTo: 'user_id' })
  bpHealthRecords: BpHealth[];

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // Define required relations here
}

export type UserWithRelations = User & UserRelations;
