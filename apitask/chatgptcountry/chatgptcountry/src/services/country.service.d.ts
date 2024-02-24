export declare class CountryService {
    getCountryCapital(): import("../models").Countrycapital | PromiseLike<import("../models").Countrycapital>;
    getCapital(country: string): Promise<string>;
}
