
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqldatasourceDataSource} from '../datasources';
import {User, UserRelations} from '../models';
import {inject} from '@loopback/core';

export type Credentials ={
  email:string;
  password:string;

}
export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {
  constructor(
    @inject('datasources.mysqldatasource') dataSource: MysqldatasourceDataSource,
  ) {
    super(User, dataSource);
  }
}
