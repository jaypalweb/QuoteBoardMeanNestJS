import { Injectable, NestMiddleware, Logger } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    Logger.log('Logger Info: ' + req.baseUrl + req.url);
    next();
  }
}
