import { Entity, model, property } from '@loopback/repository';

@model()
export class Countrycapital extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  country: string;

  @property({
    type: 'string',
    required: true,
  })
  capital: string;

  constructor(data?: Partial<Countrycapital>) {
    super(data);
  }
}

// Create an array of country-capital pairs
const countrycapitals: Countrycapital[] = [
  new Countrycapital({ country: 'USA', capital: 'Washington, D.C.' }),
  new Countrycapital({ country: 'UK', capital: 'London' }),
  // Add more country-capital pairs here
];

export type CountrycapitalWithRelations = Countrycapital & {};

// Export the updated class and types
