import {Entity, model, property, hasMany} from '@loopback/repository';
import {Product} from './product.model';

@model()
export class Course extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @hasMany(() => Product)
  products: Product[];

  constructor(data?: Partial<Course>) {
    super(data);
  }
}

export interface CourseRelations {
  // describe navigational properties here
}

export type CourseWithRelations = Course & CourseRelations;
