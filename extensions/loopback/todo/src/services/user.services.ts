import { HttpErrors } from '@loopback/rest';
import { inject } from '@loopback/core';
import {  UserService } from '@loopback/authentication';
import{UserProfile}from'@loopback/security';
import { User } from '../models';
import { Credentials, UserRepository } from '../repositories';
import { BcryptHasher } from './hash.password.bcryt';
import { repository } from '@loopback/repository';
import { passwordHasherBinding } from '../keys';

export class MyUserService implements UserService<User, Credentials> {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,

    @inject(passwordHasherBinding.PASSWORD_HASHER)
    public hasher: BcryptHasher,
  ) {}

  async verifyCredentials(credentials: Credentials): Promise<User> {
    const foundUser = await this.userRepository.findOne({
      where: {
        email: credentials.email,
      },
    });

    if (!foundUser) {
      throw new HttpErrors.NotFound(`User not found: ${credentials.email}`);
    }

    const passwordMatched = await this.hasher.comparePassword(
      credentials.password,
      foundUser.password,
    );

    if (!passwordMatched) {
      throw new HttpErrors.Unauthorized('Invalid password');
    }

    return foundUser;
  }

  convertToUserProfile(user: User): UserProfile {
    // Convert the User object to a UserProfile object
    const userProfile: any= {
      id: user.id.toString(),
      name: `${user.firstname} ${user.lastname}`,
      email: user.email,
    };

    return userProfile;
  }
}
