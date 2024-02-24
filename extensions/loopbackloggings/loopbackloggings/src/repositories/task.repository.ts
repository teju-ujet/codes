import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TaskDataSource} from '../datasources';
import {Task, TaskRelations} from '../models';

export class TaskRepository extends DefaultCrudRepository<
  Task,
  typeof Task.prototype.name,
  TaskRelations
> {
  constructor(
    @inject('datasources.task') dataSource: TaskDataSource,
  ) {
    super(Task, dataSource);
  }
}
