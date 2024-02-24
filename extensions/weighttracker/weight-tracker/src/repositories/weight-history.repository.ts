import {DefaultCrudRepository} from '@loopback/repository';
import {WeightHistory, WeightHistoryRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class WeightHistoryRepository extends DefaultCrudRepository<
  WeightHistory,
  typeof WeightHistory.prototype.id,
  WeightHistoryRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(WeightHistory, dataSource);
  }
}
