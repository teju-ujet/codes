import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'logger',
  connector: 'mysql',
  url: '',
  host: '127.0.0.1',
  port: 3307,
  user: 'root',
  password: 'teju2000',
  database: 'logger',
};


// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class LoggerDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'logger';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.logger', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
