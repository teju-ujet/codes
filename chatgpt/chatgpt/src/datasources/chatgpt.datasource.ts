// import { inject } from '@loopback/core';
// import { juggler } from '@loopback/repository';

// const config = {
//   name: 'chat',
//   connector: 'mysql',
//   url: '',
//   host: '127.0.0.1',
//   port: 3307,
//   user: 'root',
//   password: 'teju2000',
//   database: 'connect',
// };

// export class ChatgptDataSource extends juggler.DataSource {
//   static dataSourceName = 'chat';//datasourse table name

//   constructor(
//     @inject('datasources.config.chat', { optional: true })
//     dsConfig: object = config,
//   ) {
//     super(dsConfig);
//   }
// }
