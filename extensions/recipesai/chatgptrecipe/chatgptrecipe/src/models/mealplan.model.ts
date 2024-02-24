import { Entity, model, property } from '@loopback/repository';

@model()
export class MealPlan extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  dietType: string;

  @property({
    type: 'string',
    required: true,
  })
  cuisine: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  allergies: string[];

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  includedIngredients: string[];

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  excludedIngredients: string[];

  @property({
    type: 'number',
    required: true,
  })
  totalCaloriesPerDay: number;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  meals: Meal[]; // Correct type declaration for meals

  constructor(data?: Partial<MealPlan>) {
    super(data);
  }
}

export interface Meal {
  name: string;
  carbs: number;
  protein: number;
  fat: number;
}
