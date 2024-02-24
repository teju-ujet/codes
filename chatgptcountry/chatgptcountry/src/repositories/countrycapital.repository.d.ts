import { DefaultCrudRepository } from '@loopback/repository';
import { Countrycapital, CountrycapitalWithRelations } from '../models';
import { CountrycapitalDataSource } from '../datasources';
export declare class CountrycapitalRepository extends DefaultCrudRepository<Countrycapital, typeof Countrycapital.prototype.country, CountrycapitalWithRelations> {
    constructor(dataSource: CountrycapitalDataSource);
}
