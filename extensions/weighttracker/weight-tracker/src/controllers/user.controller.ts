import { repository } from '@loopback/repository';
import { post, param, requestBody, get } from '@loopback/rest';
import { User } from '../models';
import { UserRepository, WeightHistoryRepository } from '../repositories';
import { UserQuery } from '../query/query'; 
export class UserController {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
    @repository(WeightHistoryRepository)
    public weightHistoryRepository: WeightHistoryRepository,
  ) {}

  @post('/users')
  async createUser(@requestBody() user: User): Promise<User> {
    return this.userRepository.create(user);
  }

  @get("/getuserdata")
  async GetAllUser(): Promise<User[]> {
    return this.userRepository.find();
  }

  @get('/users/{id}/lastupdatedhealth')
  async getLastUpdatedHealth(
    @param.path.number('id') id: number,
  ): Promise<any> {//used query from query file 
    const userQuery = new UserQuery(this.userRepository);
    return userQuery.getLastUpdatedUserData(id);
  }
}
