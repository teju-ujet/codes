import { juggler } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';

const config = {
  name: 'weights_history',
  connector: 'mysql',
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: 'teju2000',
  database: 'connect',
};

export class WeightHistorys extends juggler.DataSource {
  static dataSourceName = 'WeightHistory';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.WeightHistory', { optional: true })
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
