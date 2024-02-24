import {Entity, model, property} from '@loopback/repository';

@model()
export class Hospital extends Entity {
  @property({
    type:'number',
    required:true,
  })
  id:number;
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @property({
    type: 'string',
    required: true,
  })
  phonenumber: string;


  constructor(data?: Partial<Hospital>) {
    super(data);
  }
}

export interface HospitalRelations {
  // describe navigational properties here
}

export type HospitalWithRelations = Hospital & HospitalRelations;
