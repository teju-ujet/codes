import { repository } from '@loopback/repository';
import { get, param, post, requestBody } from '@loopback/rest';
import { Sugar } from '../models';
import { SugarRepository } from '../repositories';
import { UserRepository } from '../repositories';

export class SugarController {
  constructor(
    @repository(SugarRepository)
    public sugarRepository: SugarRepository,
    @repository(UserRepository)
    public userRepository: UserRepository,
  ) {}

  @post('/sugar')
  async createSugar(
    @requestBody() sugar: Sugar,
  ): Promise<Sugar> {
    return this.sugarRepository.create(sugar);
  }

  @get('/users/{id}/sugar')
  async getSugarDataByUserId(
    @param.path.number('id') id: number,
  ): Promise<Sugar | null> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    const sugarData = await this.sugarRepository.findOne({
      where: {
        user_id: user.id,
      },
      order: ['measurement_date DESC'], //descending order to get the latest record
    });

    return sugarData || null;
  }
}
