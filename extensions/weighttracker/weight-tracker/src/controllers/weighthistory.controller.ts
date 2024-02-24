import { repository } from '@loopback/repository';
import { post, param, requestBody, get } from '@loopback/rest';
import { WeightHistory } from '../models';
import { WeightHistoryRepository } from '../repositories';

export class WeightHistoryController {
  constructor(
    @repository(WeightHistoryRepository)
    public weightHistoryRepository: WeightHistoryRepository,
  ) {}

  @post('/weighthistory') // Inserting weight_history details
  async createWeightHistory(
    @requestBody() weightHistory: WeightHistory,
  ): Promise<WeightHistory> {
    return this.weightHistoryRepository.create(weightHistory);
  }

  @get('/getweighthistory') // This route will retrieve all weight history records
  async getAllWeightHistory(): Promise<WeightHistory[]> {
    return this.weightHistoryRepository.find();
  }

  @get('/users/{id}/weighthistory')
  async getUserWeightHistory(
    @param.path.number('id') id: number,
  ): Promise<WeightHistory | null> {
    const user = await this.weightHistoryRepository.findById(id);
    if (!user) {
      throw new Error('User not found');
    }

    const weightHistory = await this.weightHistoryRepository.execute(`
      SELECT id, weight, userId, createdAt
      FROM WeightHistory
      WHERE userId = ${id}
      ORDER BY createdAt DESC
      LIMIT 1;
    `);

    return weightHistory.length > 0 ? weightHistory[0] : null;
  }
}
