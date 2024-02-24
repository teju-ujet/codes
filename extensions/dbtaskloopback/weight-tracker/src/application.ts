import { BootMixin } from '@loopback/boot';
import { ApplicationConfig } from '@loopback/core';
import { RestExplorerBindings, RestExplorerComponent } from '@loopback/rest-explorer';
import { RepositoryMixin } from '@loopback/repository';
import { RestApplication, RestBindings } from '@loopback/rest';
import { ServiceMixin } from '@loopback/service-proxy';
import path from 'path';
import { MySequence } from './sequence';
import { WeightController } from './controllers';
import { WeightHistoryRepository } from './repositories';
import { WeightHistory } from './models';
import { DataSource } from 'loopback-datasource-juggler';

export { ApplicationConfig };

export class WeightTrackerApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Set up the custom sequence
    this.sequence(MySequence);

    // Bind repository
    this.bindRepository();

    // Bind controller
    this.bindController();

    // Configure RestServer options
    this.configureRestServer();

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };
  }

  setupDataSource() {
    // Add your data source configuration here
    const config = new DataSource({
      name: 'myDataSource',
      connector: 'memory',
      localStorage: '',
    });

    this.dataSource(config);
  }

  bindRepository() {
    // Bind repository
    this.bind('repositories.WeightHistoryRepository').toClass(WeightHistoryRepository);
  }

  bindController() {
    // Bind controller
    this.controller(WeightController);
  }
  bindmodel(){
    this.bind('weighthistory')
  }

  configureRestServer() {
    // Configure RestServer options here
    const restServer = this.getSync(RestBindings.SERVER);
    // ...
  }
}
