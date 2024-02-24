import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'product',
  connector: 'mysql',
  url: '',
  host: '127.0.0.1',
  port: 3307,
  user: 'root',
  password: 'teju2000',
  database: 'connect'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ProductDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'product';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.product', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
