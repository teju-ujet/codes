import { repository } from '@loopback/repository';
import { post, requestBody } from '@loopback/rest';
import { CountrycapitalRepository } from '../repositories/countrycapital.repository';
import { OpenAIService } from '../services/openai.service';
import { Countrycapital, CountrycapitalWithRelations } from '../models/countrycapital.model';
import { CountryService } from '../services/country.service';

export class QuestionController {
  getCapital(country: string) {
      throw new Error('Method not implemented.');
  }
  constructor(
    private countryService: CountryService,
    @repository(CountrycapitalRepository)
    public countrycapitalRepository: CountrycapitalRepository,
    public openaiService: OpenAIService,
  ) {}

  @post('/ask')
  async ask(@requestBody() requestBody: { question: string }): Promise<string> {
    const { question } = requestBody;

    // Perform database query to retrieve country capital based on the question
    const country = question.trim().toLowerCase();
    const countryCapital = await this.countrycapitalRepository.findOne({
      where: { country },
    }) as Countrycapital;

    if (countryCapital && 'capital' in countryCapital) {
      // If country capital is found in the database, return it
      return countryCapital.capital;
    } else {
      // If country capital is not found, generate a response using OpenAI GPT-3
      const response = await this.openaiService.generateText(question);
      return response;
    }
  }
}
