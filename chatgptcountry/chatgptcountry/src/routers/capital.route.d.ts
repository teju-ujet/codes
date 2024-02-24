import { Route } from '@loopback/rest';
import { QuestionController } from '../controllers';
export declare class CapitalRouter extends Route {
    private countryController;
    private context;
    constructor(countryController: QuestionController);
}
