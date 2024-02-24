import { CountrycapitalRepository } from '../repositories/countrycapital.repository';
import { OpenAIService } from '../services/openai.service';
import { CountryService } from '../services/country.service';
export declare class QuestionController {
    private countryService;
    countrycapitalRepository: CountrycapitalRepository;
    openaiService: OpenAIService;
    getCapital(country: string): void;
    constructor(countryService: CountryService, countrycapitalRepository: CountrycapitalRepository, openaiService: OpenAIService);
    ask(requestBody: {
        question: string;
    }): Promise<string>;
}
