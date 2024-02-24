import { Middleware, MiddlewareContext } from '@loopback/rest';

export const requestLogger: Middleware = async (
  context: MiddlewareContext,
) => {
  const { request } = context;

  // Your middleware logic here
  console.log('Request received:', request.url);
};
