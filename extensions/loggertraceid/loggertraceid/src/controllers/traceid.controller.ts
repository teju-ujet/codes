import { inject } from '@loopback/core';
import { get, post, Request, requestBody, RestBindings } from '@loopback/rest';
import { User } from '../models/user.model';
import { TraceIdGeneratorService } from '../services/trace-id-generator-service.service';
import { repository } from '@loopback/repository';
import { UserRepository } from '../repositories';

export class UserLoginDataController {
  constructor(
    @inject(RestBindings.Http.REQUEST) private request: Request,
    @inject('services.TraceIdGeneratorService')
    private traceIdGeneratorService: TraceIdGeneratorService,
    @repository(UserRepository)
    private userLoginDataRepository: UserRepository,
  ) {}

  @post('/userlogin')
  async createUserLoginData(
    @requestBody() userLoginData: User,
  ): Promise<User> {
    const createdUserLoginData = await this.userLoginDataRepository.create(userLoginData);
    const maskedUserLoginData = this.traceIdGeneratorService.maskData(createdUserLoginData);
    this.traceIdGeneratorService.logTraceInfo(
      this.request.method,
      this.request.url,
      `User Login Data Created: ${JSON.stringify(maskedUserLoginData)}`// stringfy used to get output values in ""
    );
    return createdUserLoginData;
  }

  @get('/userlogin')
  async getAllUserLoginData(): Promise<User[]> {
    const userLoginDataList = await this.userLoginDataRepository.find();
    this.traceIdGeneratorService.logTraceInfo(
      this.request.method,
      this.request.url,
      `All User Login Data Retrieved: ${JSON.stringify(userLoginDataList)}`
    );
    return userLoginDataList;
  }

  @get('/usermaskeddata')//get the masked data 
  async getUserMaskedData(): Promise<User[]> {
    const userLoginDataList = await this.userLoginDataRepository.find();
    const maskedUserLoginDataList = userLoginDataList.map(userLoginData => 
      this.traceIdGeneratorService.maskData(userLoginData));
    this.traceIdGeneratorService.logTraceInfo(
      this.request.method,
      this.request.url,
      `All User Login Data Retrieved: ${JSON.stringify(maskedUserLoginDataList)}`
    );
    return maskedUserLoginDataList;
  }
}
