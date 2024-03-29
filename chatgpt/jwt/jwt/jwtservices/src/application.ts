import { BootMixin } from '@loopback/boot';
import { ApplicationConfig, BindingKey, BindingScope } from '@loopback/core';
import { RestExplorerBindings, RestExplorerComponent } from '@loopback/rest-explorer';
import { RepositoryMixin } from '@loopback/repository';
import { RestApplication } from '@loopback/rest';
import { ServiceMixin } from '@loopback/service-proxy';
import path from 'path';
import { MySequence } from './sequence';
import { JwtController } from './controllers';
import { JwtService } from './services/jwt-services';
import { AuthenticationBindings, AuthenticationComponent } from '@loopback/authentication';
import { JWTAuthenticationComponent } from '@loopback/authentication-jwt';

export { ApplicationConfig };

export class JwtApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Set up the custom sequence
    this.sequence(MySequence);
    this.controller(JwtController);

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
    };

    // Add authentication components
    this.component(AuthenticationComponent);
    this.component(JWTAuthenticationComponent);
    this.bind<JwtService>(BindingKey.create<JwtService>('services.jwt.service')).toClass(JwtService).inScope(BindingScope.SINGLETON);
    // Bind JwtService as a singleton
    this.bind<JwtService>(AuthenticationBindings.CURRENT_USER).toClass(JwtService).inScope(BindingScope.SINGLETON);
  }
}

// Export the instance of your application
export const app = new JwtApplication();
