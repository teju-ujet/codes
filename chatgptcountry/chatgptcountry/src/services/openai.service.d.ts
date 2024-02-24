export declare class OpenAIService {
    generateResponse(prompt: string): void;
    private openai;
    constructor(apiKey: string);
    generateText(prompt: string): Promise<string>;
}
