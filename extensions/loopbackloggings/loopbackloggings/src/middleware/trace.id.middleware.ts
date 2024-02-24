// import { Next } from '@loopback/core';
// import { Middleware, MiddlewareContext } from '@loopback/rest';

// export const traceIdMiddleware: Middleware = async (
//   context: MiddlewareContext,
//   next: Next
// ) => {
//   // Generate a simple trace ID (you can replace this with your logic)
//   const traceId = Math.random().toString(36).substring(2, 15);
//   context.request.headers['X-Trace-ID'] = traceId; // Add trace ID to request headers

//   const result = await next();

//   return result;
// };
