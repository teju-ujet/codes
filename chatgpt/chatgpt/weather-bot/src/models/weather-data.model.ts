import {Entity, model, property} from '@loopback/repository';

@model({
  name: 'weather_data',
})
export class WeatherData extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  city: string;

  @property({
    type: 'number',
    required: true,
  })
  temperature: number;

  constructor(data?: Partial<WeatherData>) {
    super(data);
  }
}
