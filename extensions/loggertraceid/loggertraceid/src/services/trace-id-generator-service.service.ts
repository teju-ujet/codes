import { injectable } from '@loopback/core';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../models/user.model';
import fs from 'fs';
@injectable()
export class TraceIdGeneratorService {
  constructor() {}

  generateTraceId(): string {
    // Generate a random UUID (universal unique identifier) as a trace ID
    return uuidv4();
  }

  maskData(userLoginData: User): User {
    const maskedData = new User(userLoginData);
    maskedData.password = '***'; 
    return maskedData;
  }

  logTraceInfo(
    requestMethod: string,
    requestUrl: string,
    message: string
  ): void {
    const traceId = this.generateTraceId();
    const currentTime = new Date().toISOString();
    const logMessage = `${currentTime}: TraceID=${traceId} ${requestMethod} "${requestUrl}" - ${message}`;

    console.log(logMessage); 

    const logFilePath = 'trace-id-log.txt'; // Define the log file path
    fs.appendFile(logFilePath, logMessage + '\n', (err) => {
      if (err) {
        console.error('Error writing to text file:', err);
      } else {
        console.log('Data logged to:', logFilePath); // Log the file path
      }
    });
  }
}
