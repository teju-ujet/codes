import * as isEmail from 'isemail';
import { Credentials } from '../repositories/user.repository';
import { HttpErrors } from '@loopback/rest';
export function validateCredentials(credentials:Credentials){
if(!isEmail.validate(credentials.email))
{
    throw new HttpErrors.UnprocessableEntity('invalid email');

};
if(credentials.password.length<3){
    throw new HttpErrors.UnprocessableEntity(
        'password length should not be less than 5'
        )
};
}