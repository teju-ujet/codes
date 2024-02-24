import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Sugar, SugarRelations} from '../models';

export class SugarRepository extends DefaultCrudRepository<
  Sugar,
  typeof Sugar.prototype.id,
  SugarRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Sugar, dataSource);
  }
}
