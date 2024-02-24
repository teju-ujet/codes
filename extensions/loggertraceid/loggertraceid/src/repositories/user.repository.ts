import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LoggerDataSource} from '../datasources';
import {User, UserRelations} from '../models';

export class UserRepository extends DefaultCrudRepository<
User,
  typeof User.prototype.id,
  UserRelations
> {
  constructor(
    @inject('datasources.logger') dataSource: LoggerDataSource,
  ) {
    super(User, dataSource);
  }
}
