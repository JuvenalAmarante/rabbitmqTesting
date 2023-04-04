import { Controller, Get } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('action_one')
  actionOne(@Payload() data: any) {
    console.log(`Message of Action One: ${data}`);
  }

  @EventPattern('action_two')
  actionTwo(@Payload() data: any) {
    console.log(`Message of Action Two: ${data}`);
  }
}
