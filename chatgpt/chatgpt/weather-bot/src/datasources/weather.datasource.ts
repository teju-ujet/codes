import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'weather',
  connector: 'rest',
  baseURL: 'https://api.weatherapi.com/v1',
  crud: false,
  options: {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
  },
  operations: [
    {
      template: {
        method: 'GET',
        url: '/current.json',
        query: {
          key: '{apiKey}',
          q: '{city}',
        },
        responsePath: '$.current.temp_c',
      },
      functions: {
        getWeather: ['city'],
      },
    },
  ],
};

export class WeatherDataSource extends juggler.DataSource {
  static dataSourceName = 'weather';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.weather', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
