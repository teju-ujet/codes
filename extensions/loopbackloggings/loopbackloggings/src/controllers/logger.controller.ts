// import { get, Request, ResponseObject, RestBindings } from '@loopback/rest';
// import { inject } from '@loopback/core';

// export class MyController {
//   constructor(@inject('utils.logger') private logger: any) {}

//   @get('/logger')
//   async myEndpoint(
//     @inject(RestBindings.Http.REQUEST) request: Request
//   ): Promise<ResponseObject> {
//     const traceId = request.headers['x-trace-id'];
//     this.logger.info(`Received request with trace ID: ${traceId}`);

//     const response: ResponseObject = {
//       statusCode: 200,
//       description: 'Success', // Add a description here
//       content: {
//         'application/json': {
//           schema: {
//             type: 'string',
//           },
//         },
//       },
//     };

//     return response;
//   }
// }
