import { ApplicationConfig, CoreBindings } from '@loopback/core';
import { RestBindings, RestApplication, RestServer } from '@loopback/rest';
import { BootMixin } from '@loopback/boot';
import { ServiceMixin } from '@loopback/service-proxy';
import { QuestionController } from './controllers/questions.controller';
import { CountryService } from './services/country.service';
import { OpenAIService } from './services/openai.service';

export { ApplicationConfig };

export class ChatbotApplication extends BootMixin(ServiceMixin(RestApplication)) {
  migrateSchema(arg0: { existingSchema: string; }) {
    throw new Error('Method not implemented.');
  }
  constructor(options?: ApplicationConfig) {
    super(options);

    this.setupBindings();
    this.setupControllers();
    this.setupRouter();
  }

  private setupBindings(): void {
    this.bind('services.CountryService').toClass(CountryService);
    this.bind('services.OpenAIService').toClass(OpenAIService);
  }

  private setupControllers(): void {
    this.controller(QuestionController);
  }

  private async setupRouter(): Promise<void> {
    const server = await this.getServer(RestServer);
    server.basePath('/api');
  }
}

// Create and run the application
const app = new ChatbotApplication();
app
  .bind(CoreBindings.APPLICATION_INSTANCE)
  .to(app)
  .tag({ [RestBindings.SERVER.key]: 'rest-server' })
  .tag({ [RestBindings.INVOKE_MIDDLEWARE_SERVICE.key]: true });
app.start().catch((err) => {
  console.error('Cannot start the application.', err);
  process.exit(1);
});
