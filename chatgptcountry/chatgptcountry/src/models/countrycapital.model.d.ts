import { Entity } from '@loopback/repository';
export declare class Countrycapital extends Entity {
    country: string;
    capital: string;
    constructor(data?: Partial<Countrycapital>);
}
export type CountrycapitalWithRelations = Countrycapital & {};
