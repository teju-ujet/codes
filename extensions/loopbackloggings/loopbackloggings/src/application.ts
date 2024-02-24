import { BootMixin } from '@loopback/boot';
import { ApplicationConfig } from '@loopback/core';
import { RestExplorerBindings, RestExplorerComponent } from '@loopback/rest-explorer';
import { RepositoryMixin } from '@loopback/repository';
import { RestApplication } from '@loopback/rest';
import { ServiceMixin } from '@loopback/service-proxy';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { requestLogger } from './middleware/request-logger';
import { CustomLogger } from './custom-logger';
import { MySequence } from './sequence';
import { createLogger, format, transports } from 'winston'; // Import format and transports

export { ApplicationConfig };

export class LoopbackloggingsApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Create a Winston logger instance
    const logger = createLogger({
      level: 'info',
      format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Specify a format for the timestamp
        format.printf(({ timestamp, level, message, traceId }) => {
          return `[${timestamp}] [${traceId}] ${level}: ${message}`;
        })
      ),
      transports: [new transports.Console()],
    });

    // Bind the logger instance to the application context with the correct key
    this.bind('log.customLogger').to(logger);

    // Add the request logger middleware to log requests
    this.middleware(requestLogger); // Use the correct middleware reference

    // Set up the custom sequence (if you have one)
    // this.sequence(MySequence);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    // Ensure that the sequence function is correctly imported and set here
    // this.sequence(MySequence);

    // Use the CustomLogger class to log messages with traceId
    const customLogger = new CustomLogger();

    // Example usage of the CustomLogger:
    customLogger.info('Application started');

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };
  }
}
