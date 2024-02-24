"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryService = void 0;
const tslib_1 = require("tslib");
// src/services/country.service.ts
const axios_1 = tslib_1.__importDefault(require("axios"));
class CountryService {
    getCountryCapital() {
        throw new Error('Method not implemented.');
    }
    async getCapital(country) {
        const response = await axios_1.default.get(`https://restcountries.com/v2/name/${country}`);
        const [countryData] = response.data;
        return countryData.capital;
    }
}
exports.CountryService = CountryService;
//# sourceMappingURL=country.service.js.map