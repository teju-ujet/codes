// Uncomment these imports to begin using these cool features!
import {inject} from '@loopback/core';
import { repository } from "@loopback/repository";
import { Credentials, UserRepository } from "../repositories";
import { get, getJsonSchemaRef, post, requestBody } from "@loopback/rest";
import { User } from "../models";
import { validateCredentials } from "../services/validator";
import * as _ from 'lodash';
import { BcryptHasher } from '../services/hash.password.bcryt';
import { CredentialsRequestBody,CredentialsSchema} from './specs/user.controller.specs';//login route
// import { resolve } from 'path';
// import { error } from 'console';
import { MyUserService } from '../services/user.services';
import { JWTservices } from '../services/jwt-services';
import { TokenSecviceBindings, UserServiceBindings, passwordHasherBinding } from '../keys';
import{UserProfile}from '@loopback/security';
import { AuthenticationBindings, authenticate } from '@loopback/authentication';
export class UserController {
  constructor(
    @repository(UserRepository)
    public UserRepository:UserRepository,
    //@inject('service.hasher')
   @inject(passwordHasherBinding.PASSWORD_HASHER)
    public hasher:BcryptHasher,
  //@inject('services.user.service')
 @inject(UserServiceBindings.USER_SERVICE)
     public userService:MyUserService,
    //@inject('service.jwt.service')
     @inject(TokenSecviceBindings.TOKEN_SERVICE)
     public jwtService:JWTservices,

  ) {}
  @post('/users/signup',{
    responses:{
      '200':{
        decription:'User',
        content:{
          schema:getJsonSchemaRef(User),

        },
      },

    },
  })
  async signup(@requestBody() userData:User){
    validateCredentials(_.pick(userData,['email','password']));
    userData.password= await this.hasher.hashPassword(userData.password);

    const savedUser=await this.UserRepository.create(userData);
  
    savedUser.password;
    return savedUser;

  }
  @post('/users/login',{
    responses:{
      '200':{
        decription:'Token',
        content:{
          'appication/json':{
            schema:{
              type:'object',
              properties:{
                token:{
                  type:'string',
                },
              },
            },
          },
        },
      },
    },
  })
  
  async login(
  @requestBody(CredentialsRequestBody)credentials:Credentials,
    ):Promise <{token:string}> {
      //make sure user exits,pasaword be valid
     const user=  await this.userService.verifyCredentials(credentials);
     //console.log(user);
     const UserProfile= this.userService.convertToUserProfile(user);
     //console.log(UserProfile);
     const token=await this.jwtService.generatetoken(UserProfile);
      //return Promise.resolve({token:"47289374928asdasdas"});//for login route
      return Promise.resolve({token});
  }
  @get("/user/me")
  @authenticate("jwt")
    async me(
      @inject(AuthenticationBindings.CURRENT_USER)
      currentUser:UserProfile,
    ):Promise<any>{//UserProfile
      //console.log(currentUser);
      //return Promise.resolve({id:"101",name:"teju"});
    return Promise.resolve(currentUser);


  }
}
