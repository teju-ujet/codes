import { Context, inject } from '@loopback/context';
import { RestBindings, Request, Response, get, Route, OperationArgs, OperationObject } from '@loopback/rest';
import { QuestionController } from '../controllers';

export class CapitalRouter extends Route {
  @inject(RestBindings.Http.CONTEXT)
  private context: Context;

  constructor(
    @inject('controllers.CountryController')
    private countryController: QuestionController,
  ) {
    super('get', '/capital/:country', {
        responses: {
          '200': {
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    country: { type: 'string' },
                    capital: { type: 'string' },
                  },
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    error: { type: 'string' },
                  },
                },
              },
            },
          },
        },
    }, async (request: Request, response: Response) => {
      const country = request.params.country;

      try {
        const capital = await this.countryController.getCapital(country);
        response.json({ country, capital });
      } catch (error) {
        response.status(500).json({ error: error.message });
      }
    });
  }
}
