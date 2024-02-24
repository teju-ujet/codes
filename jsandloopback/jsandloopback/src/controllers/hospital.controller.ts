import { get, getModelSchemaRef, param } from '@loopback/rest';
import { Hospital } from '../models';

const mockData: Hospital[] = [
  new Hospital({
    id: 1,
    name: 'Hospital A',
    address: '123 Main Street',
    phonenumber: '123-456-7890',
  }),
  new Hospital({
    id: 2,
    name: 'Hospital B',
    address: '456 Elm Street',
    phonenumber: '987-654-3210',
  }),
];

export class HospitalController {
  @get('/hospitals/{id}', {
    responses: {
      '200': {
        description: 'Hospital found',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Hospital),
          },
        },
      },
      '404': {
        description: 'Hospital not found',
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Hospital | undefined> {
    return mockData.find(hospital => hospital.id === id);
  }
}
