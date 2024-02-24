// src/custom-logger.ts

import { injectable } from '@loopback/core';
import { createLogger, transports, format, Logger as WinstonLogger } from 'winston';

@injectable()
export class CustomLogger {
  private winstonLogger: WinstonLogger;

  constructor() {
    this.winstonLogger = createLogger({
      level: 'info',
      format: format.combine(
        format.timestamp(),
        format.errors({ stack: true }),
        format.printf(({ timestamp, level, message, stack, traceId }) => {
          return `${timestamp} [${traceId}] ${level}: ${message}${stack ? '\n' + stack : ''}`;
        }),
      ),
      transports: [new transports.Console()],
    });
  }

  log(message: string, traceId?: string) {
    this.winstonLogger.log({ level: 'info', message, traceId });
  }

  error(message: string, traceId?: string, error?: Error) {
    this.winstonLogger.error({ message, traceId, error });
  }

  warn(message: string, traceId?: string) {
    this.winstonLogger.warn({ message, traceId });
  }

  info(message: string, traceId?: string) {
    this.winstonLogger.info({ message, traceId });
  }

  debug(message: string, traceId?: string) {
    this.winstonLogger.debug({ message, traceId });
  }
}
