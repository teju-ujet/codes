import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'questions',
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
export class QuestionsDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'questions';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.questions', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
