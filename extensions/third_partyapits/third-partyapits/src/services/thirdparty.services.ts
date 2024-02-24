import { injectable } from '@loopback/core';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config(); 
@injectable()
export class ApiService {
//   uri = process.env.URI; 
  uri="https://api.publicapis.org/entries";

  async getThirdPartyApiData(): Promise<any> {
    try {
      const apiResponse = await axios.get(this.uri);
      const responseData = apiResponse.data;

      // Extract relevant information from the API response
      const entries = responseData.entries.map((entry: any) => ({
        title: entry.API,
        description: entry.Description,
        category: entry.Category,
        link: entry.Link,
      }));

      return entries;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch data from the third-party API.');
    }
  }
}
