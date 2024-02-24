import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Course,
  Product,
} from '../models';
import {CourseRepository} from '../repositories';

export class CourseProductController {
  constructor(
    @repository(CourseRepository) protected courseRepository: CourseRepository,
  ) { }

  @get('/courses/{id}/products', {
    responses: {
      '200': {
        description: 'Array of Course has many Product',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Product)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Product>,
  ): Promise<Product[]> {
    return this.courseRepository.products(id).find(filter);
  }

  @post('/courses/{id}/products', {
    responses: {
      '200': {
        description: 'Course model instance',
        content: {'application/json': {schema: getModelSchemaRef(Product)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Course.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Product, {
            title: 'NewProductInCourse',
            exclude: ['id'],
            optional: ['courseId']
          }),
        },
      },
    }) product: Omit<Product, 'id'>,
  ): Promise<Product> {
    return this.courseRepository.products(id).create(product);
  }

  @patch('/courses/{id}/products', {
    responses: {
      '200': {
        description: 'Course.Product PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Product, {partial: true}),
        },
      },
    })
    product: Partial<Product>,
    @param.query.object('where', getWhereSchemaFor(Product)) where?: Where<Product>,
  ): Promise<Count> {
    return this.courseRepository.products(id).patch(product, where);
  }

  @del('/courses/{id}/products', {
    responses: {
      '200': {
        description: 'Course.Product DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Product)) where?: Where<Product>,
  ): Promise<Count> {
    return this.courseRepository.products(id).delete(where);
  }
}
