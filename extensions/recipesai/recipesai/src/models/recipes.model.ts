import { Entity, model, property } from '@loopback/repository';

@model()
export class Recipe extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id: string;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  recipes: object[];

  @property({
    type: 'string',
  })
  response?: string;

  constructor(data?: Partial<Recipe>) {
    super(data);
  }
}
