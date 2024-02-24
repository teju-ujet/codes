import { DefaultCrudRepository } from '@loopback/repository';
import { Countrycapital, CountrycapitalWithRelations } from '../models';
import { CountrycapitalDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class CountrycapitalRepository extends DefaultCrudRepository<
  Countrycapital,
  typeof Countrycapital.prototype.country,
  CountrycapitalWithRelations
> {
  constructor(
    dataSource: CountrycapitalDataSource,
  ) {
    super(Countrycapital, dataSource);
  }
}