import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'task',
  connector: 'mysql',
  url: '',
  host: '127.0.0.1',
  port: 3307,
  user: 'root',
  password: 'teju2000',
  database: 'logger',
};

@lifeCycleObserver('datasource')
export class TaskDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'task';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.task', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
