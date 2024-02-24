import {BootMixin} from '@loopback/boot';
import {Application, ApplicationConfig} from '@loopback/core';
import {
  RestExplorerBindings,
  RestExplorerComponent,
} from '@loopback/rest-explorer';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication, RestBindings} from '@loopback/rest';
import {ServiceMixin} from '@loopback/service-proxy';
import path from 'path';
import {MySequence} from './sequence';
import { OpenAIService } from './services/openai.service';
let app: Application = new Application();
export {ApplicationConfig};

export class QnaApiApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Set up the custom sequence
    this.sequence(MySequence);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
  
  async configure() {
    this.bind('services.OpenAIService').toClass(OpenAIService);
  this.bind('config.myapikey').to('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');
  app.bind(RestBindings.ERROR_WRITER_OPTIONS).to({safeFields: ['errorCode']});
  }
}
  }
}
