import { repository } from '@loopback/repository';
import { post, get, param, requestBody } from '@loopback/rest';
import { WeightHistoryRepository } from '../repositories';
import { WeightHistory } from '../models';

export class WeightController {
  constructor(
    @repository(WeightHistoryRepository)
    protected weightRepository: WeightHistoryRepository,
  ) {}

  @post('/weights')
  async createWeight(@requestBody() weight: WeightHistory): Promise<WeightHistory> {
    return this.weightRepository.createWeight(weight);
  }

  @get('/weights/{userName}/{date}')
  async getLastUpdatedWeight(
    @param.path.string('userName') userName: string,
    @param.path.string('date') date: string,
  ): Promise<WeightHistory | null> {
    return this.weightRepository.getLastUpdatedWeight(userName, date);
  }
}
