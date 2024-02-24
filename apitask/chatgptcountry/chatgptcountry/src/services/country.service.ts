// src/services/country.service.ts
import axios from 'axios';

export class CountryService {
  getCountryCapital(): import("../models").Countrycapital | PromiseLike<import("../models").Countrycapital> {
    throw new Error('Method not implemented.');
  }
  async getCapital(country: string): Promise<string> {
    const response = await axios.get(`https://restcountries.com/v2/name/${country}`);
    const [countryData] = response.data;

    return countryData.capital;
  }
}
