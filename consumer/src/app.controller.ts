import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('action_one')
  async actionOne(@Payload() data: any) {
    this.appService.actionOne(data);
  }

  @EventPattern('action_two')
  async actionTwo(@Payload() data: any) {
    this.appService.actionTwo(data);
  }
}
