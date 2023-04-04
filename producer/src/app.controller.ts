import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('one')
  sendMessageActionOne(@Body('msg') msg: string): string {
    return this.appService.actionOne(msg);
  }

  @Post('two')
  sendMessageActionTwo(@Body('msg') msg: string): string {
    return this.appService.actionTwo(msg);
  }
}
