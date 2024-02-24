// import {BootMixin} from '@loopback/boot';
// import {ApplicationConfig} from '@loopback/core';
// import {
//   RestExplorerBindings,
//   RestExplorerComponent,
// } from '@loopback/rest-explorer';
// import {RepositoryMixin} from '@loopback/repository';
// import {RestApplication} from '@loopback/rest';
// import {ServiceMixin} from '@loopback/service-proxy';
// import path from 'path';
// import {MySequence} from './sequence';

// export {ApplicationConfig};

// export class WeatherBotApplication extends BootMixin(
//   ServiceMixin(RepositoryMixin(RestApplication)),
// ) {
//   constructor(options: ApplicationConfig = {}) {
//     super(options);

//     // Set up the custom sequence
//     this.sequence(MySequence);
//     this.sequence(MySequence);

//   // Bind the weather API key
//   this.bind('datasources.config.weather').to({
//     apiKey: 'YOUR_WEATHER_API_KEY',
//   });

//   Set up the weather data source
//   this.bind('datasources.weather').toClass(WeatherDataSource);

//   // Set up controllers
//   this.controller('ping-controller');

//   }
//     // Set up default home page
//     this.static('/', path.join(__dirname, '../public'));

//     // Customize @loopback/rest-explorer configuration here
//     this.configure(RestExplorerBindings.COMPONENT).to({
//       path: '/explorer',
//     });
//     this.component(RestExplorerComponent);

//     this.projectRoot = __dirname;
//     // Customize @loopback/boot Booter Conventions here
//     this.bootOptions = {
//       controllers: {
//         // Customize ControllerBooter Conventions here
//         dirs: ['controllers'],
//         extensions: ['.controller.js'],
//         nested: true,
//       },
//     };
//     async start() {
//       await super.start();
    
//       const restServer = await this.getServer<RestServer>(RestServer);
//       const port = await restServer.get(RestBindings.PORT);
//       console.log(`Server is running at http://localhost:${port}`);
//     }
//   }
// }
