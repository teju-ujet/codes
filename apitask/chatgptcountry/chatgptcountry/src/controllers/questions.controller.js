"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const countrycapital_repository_1 = require("../repositories/countrycapital.repository");
const openai_service_1 = require("../services/openai.service");
const country_service_1 = require("../services/country.service");
let QuestionController = class QuestionController {
    getCapital(country) {
        throw new Error('Method not implemented.');
    }
    constructor(countryService, countrycapitalRepository, openaiService) {
        this.countryService = countryService;
        this.countrycapitalRepository = countrycapitalRepository;
        this.openaiService = openaiService;
    }
    async ask(requestBody) {
        const { question } = requestBody;
        // Perform database query to retrieve country capital based on the question
        const country = question.trim().toLowerCase();
        const countryCapital = await this.countrycapitalRepository.findOne({
            where: { country },
        });
        if (countryCapital && 'capital' in countryCapital) {
            // If country capital is found in the database, return it
            return countryCapital.capital;
        }
        else {
            // If country capital is not found, generate a response using OpenAI GPT-3
            const response = await this.openaiService.generateText(question);
            return response;
        }
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/ask'),
    tslib_1.__param(0, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], QuestionController.prototype, "ask", null);
QuestionController = tslib_1.__decorate([
    tslib_1.__param(1, (0, repository_1.repository)(countrycapital_repository_1.CountrycapitalRepository)),
    tslib_1.__metadata("design:paramtypes", [country_service_1.CountryService,
        countrycapital_repository_1.CountrycapitalRepository,
        openai_service_1.OpenAIService])
], QuestionController);
exports.QuestionController = QuestionController;
//# sourceMappingURL=questions.controller.js.map