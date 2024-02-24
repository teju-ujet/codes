import { inject } from '@loopback/core';
import { genSalt, hash, compare } from 'bcryptjs';
import { passwordHasherBinding } from '../keys';

export interface PasswordHasher<T = string> {
  hashPassword(password: T): Promise<T>;
  comparePassword(providedPassword: T, storedPassword: T): Promise<boolean>;
}

export class BcryptHasher implements PasswordHasher<string> {
  constructor(
    @inject(passwordHasherBinding.ROUNDS)
    public readonly rounds: number,
  ) {}

  async comparePassword(
    providedPassword: string,
    storedPassword: string,
  ): Promise<boolean> {
    const passwordMatched = await compare(providedPassword, storedPassword);
    return passwordMatched;
  }

  async hashPassword(password: string): Promise<string> {
    const salt = await genSalt(this.rounds);
    const hashedPassword = await hash(password, salt);
    return hashedPassword;
  }
}
