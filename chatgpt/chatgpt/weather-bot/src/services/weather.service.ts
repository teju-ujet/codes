import {getService} from '@loopback/service-proxy';
import {inject, Provider} from '@loopback/core';
import { WeatherDataSource } from '../datasources/weather.datasource';


export interface WeatherService {
  getWeather(city: string): Promise<string>;
}

export class WeatherServiceProvider implements Provider<WeatherService> {
  constructor(
    @inject('datasources.weather')
    protected dataSource: WeatherDataSource = new WeatherDataSource(),
  ) {}

  value(): Promise<WeatherService> {
    return getService(this.dataSource);
  }
}
