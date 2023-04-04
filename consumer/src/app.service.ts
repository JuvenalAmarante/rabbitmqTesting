import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private logger = new Logger('Consumer');

  actionOne(data: any) {
    this.logger.log(`Message of Action One: ${data.message}`);
  }

  actionTwo(data: any) {
    this.logger.log(`Message of Action Two: ${data.message}`);
  }
}
