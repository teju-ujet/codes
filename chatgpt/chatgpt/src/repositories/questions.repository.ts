// import {inject} from '@loopback/core';
// import {DefaultCrudRepository} from '@loopback/repository';
// import {ChatgptDataSource} from '../datasources';
// import {Chat, QuestionsRelations} from '../models';

// export class QuestionsRepository extends DefaultCrudRepository<
//   Chat,
//   typeof Chat.prototype.questions,
//   QuestionsRelations
// > {
//   constructor(
//     @inject('datasources.chat') dataSource: ChatgptDataSource,
//   ) {
//     super(Chat, dataSource);
//   }
// }
