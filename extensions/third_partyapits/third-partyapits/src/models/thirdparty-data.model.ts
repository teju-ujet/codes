import {Entity, model, property} from '@loopback/repository';

@model()
export class ThirdpartyData extends Entity {
  @property({
    type: 'string',
    //id: true,
    required:true,
  })
  title?: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  type: string;

  @property({
    type: 'string',
  })
  link?: string;


  constructor(data?: Partial<ThirdpartyData>) {
    super(data);
  }
}

export interface ThirdpartyDataRelations {

}

export type ThirdpartyDataWithRelations = ThirdpartyData & ThirdpartyDataRelations;
