import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqldatasourceDataSource} from '../datasources';
import {Course, CourseRelations, Product} from '../models';
import {ProductRepository} from './product.repository';

export class CourseRepository extends DefaultCrudRepository<
  Course,
  typeof Course.prototype.id,
  CourseRelations
> {

  public readonly products: HasManyRepositoryFactory<Product, typeof Course.prototype.id>;

  constructor(
    @inject('datasources.mysqldatasource') dataSource: MysqldatasourceDataSource, 
    @repository.getter('ProductRepository')
     protected productRepositoryGetter: Getter<ProductRepository>,
  ) {
    super(Course, dataSource);
    this.products = this.createHasManyRepositoryFactoryFor(
      'products',
     productRepositoryGetter,);
    this.registerInclusionResolver('products', this.products.inclusionResolver);
  }
}
