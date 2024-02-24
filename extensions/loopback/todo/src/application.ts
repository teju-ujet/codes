// Import necessary modules and classes
import { BootMixin } from '@loopback/boot';
import { ApplicationConfig } from '@loopback/core';
import {
  RestExplorerBindings,
  RestExplorerComponent,
} from '@loopback/rest-explorer';
import { RepositoryMixin } from '@loopback/repository';
import { RestApplication } from '@loopback/rest';
import { ServiceMixin } from '@loopback/service-proxy';
import path from 'path';
import { MySequence } from './sequence';
import { BcryptHasher } from './services/hash.password.bcryt';
import { MyUserService } from './services/user.services';
import { JWTservices } from './services/jwt-services';
import {
  TokenSecviceBindings,
  TokenServicesContent,
  UserServiceBindings,
  passwordHasherBinding,
} from './keys';
import { AuthenticationComponent, registerAuthenticationStrategy } from '@loopback/authentication';
import{JWTStrategy}from "./authentication-strategies/jwt-strategy"
export { ApplicationConfig };

export class TodoApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);
    this.setupBinding(); // Call the setupBinding() method
    this.component(AuthenticationComponent);
    registerAuthenticationStrategy(this,JWTStrategy)
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
    };
  }

  setupBinding(): void {
    this.bind(passwordHasherBinding.PASSWORD_HASHER).toClass(BcryptHasher);
    this.bind(passwordHasherBinding.ROUNDS).to(10);
    this.bind(TokenSecviceBindings.TOKEN_EXPIRES_IN).to(TokenServicesContent.TOKEN_EXPIRES_IN_VALUE);
    this.bind(UserServiceBindings.USER_SERVICE).toClass(MyUserService);
    this.bind(TokenSecviceBindings.TOKEN_SERVICE).toClass(JWTservices);
    this.bind(TokenSecviceBindings.TOKEN_SECRET).to(
      TokenServicesContent.TOKEN_SECRET_VALUE
    );
    
  }
}
