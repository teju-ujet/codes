import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {BpHealth, BpHealthRelations} from '../models';

export class BpHealthRepository extends DefaultCrudRepository<
  BpHealth,
  typeof BpHealth.prototype.id,
  BpHealthRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(BpHealth, dataSource);
  }
}
