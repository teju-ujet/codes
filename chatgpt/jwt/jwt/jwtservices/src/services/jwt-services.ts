import { HttpErrors } from '@loopback/rest';
import jwt, { JwtPayload } from 'jsonwebtoken';

interface DecodedToken extends JwtPayload {
  response: string;
}

export class JwtService {
  private readonly secretKey: string;

  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }

  generateToken(): string {
    const token = jwt.sign({}, this.secretKey, {
      expiresIn: '1hr',
    });

    return token;
  }

  async verifyToken(token: string): Promise<DecodedToken> {
    if (!token) {
      throw new HttpErrors.Unauthorized(`Error verifying token: 'token' is null`);
    }

    try {
      const decodedToken = jwt.verify(token, this.secretKey) as DecodedToken;
      return decodedToken;
    } catch (error) {
      throw new HttpErrors.Unauthorized(`Error verifying token: ${error.message}`);
    }
  }
}
