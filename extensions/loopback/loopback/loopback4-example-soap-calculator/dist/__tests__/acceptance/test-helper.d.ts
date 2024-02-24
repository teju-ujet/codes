import { Client } from '@loopback/testlab';
import { SoapCalculatorApplication } from '../..';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: SoapCalculatorApplication;
    client: Client;
}
