import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as dsconfig from './countrycapital.datasource.json';


const config = {
  name: 'countrycapital',
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
export class CountrycapitalDataSource extends juggler.DataSource {
  static dataSourceName = 'countrycapital';

  constructor(
    @inject('datasources.config.countrycapital', { optional: true })
    dataSourceConfig: object = dsconfig,
  ) {
    super(dataSourceConfig);
  }
}