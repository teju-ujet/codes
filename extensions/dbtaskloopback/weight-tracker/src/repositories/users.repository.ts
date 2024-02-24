import { DefaultCrudRepository, Filter } from '@loopback/repository';
import { WeightHistory } from '../models';
import { WeightHistorys } from '../datasources';
import { inject } from '@loopback/core';

export class WeightHistoryRepository extends DefaultCrudRepository<
  WeightHistory,
  typeof WeightHistory.prototype.id
> {
  constructor(
    @inject('datasources.WeightHistorys') dataSource: WeightHistorys,
  ) {
    super(WeightHistory, dataSource);
  }

  async createWeight(weight: WeightHistory): Promise<WeightHistory> {
    return this.create(weight);
  }

  async getLastUpdatedWeight(userName: string, date: string): Promise<WeightHistory | null> {
    const filter: Filter<WeightHistory> = {
      where: {
        userName,
        date: new Date(date),
      },
      order: ['updatedAt DESC'],
    };
  
    const weightHistory = await this.findOne(filter);
    return weightHistory || null;
  }
}
