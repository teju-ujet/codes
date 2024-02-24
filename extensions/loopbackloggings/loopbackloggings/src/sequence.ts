import {MiddlewareSequence} from '@loopback/rest';

export class MySequence extends MiddlewareSequence {}

// import { inject } from '@loopback/context';
// import {
//   MiddlewareContext,
//   SequenceActions,
//   SequenceHandler,
//   RestBindings,
// } from '@loopback/rest';
// import { traceIdMiddleware } from './middleware/trace.id.middleware';

// export class MySequence implements SequenceHandler {
//   constructor(
//     @inject(RestBindings.Http.CONTEXT) public context: MiddlewareContext,
//   ) {}

//   async handle() {
//     // Add your middleware to the context here
//     const traceIdMiddleware = await this.context.get<TraceIdMiddlewareProvider>(
//       'middleware.traceId',
//     );

//     // Apply the trace ID middleware
//     await traceIdMiddleware.handle(this.context, async () => {
//       // Continue handling the request
//       const route = this.context.get<SequenceActions>(
//         SequenceBindings.FIND_ROUTE,
//       );
//       const result = await route(this.context);

//       return result;
//     });
//   }
// }
