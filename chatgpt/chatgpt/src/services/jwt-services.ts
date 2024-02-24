import jwt from 'jsonwebtoken';
export class JwtService {
    private secretKey: string;
  
    constructor(secretKey: string) {
      this.secretKey = secretKey;
    }
  
    generateToken(payload: object): string {
      return jwt.sign(payload, this.secretKey);
    }
  
    verifyToken(token: string): any {
      return jwt.verify(token, this.secretKey);
    }
  }
  