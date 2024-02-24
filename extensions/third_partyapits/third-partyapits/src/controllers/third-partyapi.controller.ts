// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';

import { get, param, post, requestBody } from '@loopback/rest';
import { ApiService } from '../services/thirdparty.services';
import {ThirdpartyData} from "../models/thirdparty-data.model";
import { inject } from '@loopback/core';
export class ThirdPartyapiController {
  constructor(
    @inject('services.ApiService')
    private apiService: ApiService, 
  ) {}

  @get('/thirdpartyapi')
  async getThirdPartyApiData(): Promise<any> {
    return this.apiService.getThirdPartyApiData();
  }
    @post('/thirdpartydata')
    async createData(@requestBody() data: ThirdpartyData): Promise<ThirdpartyData> {//ThirdpartyData geting from model 
      return data;
  }
}


