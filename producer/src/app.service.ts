import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('ACTION_MESSAGE_SERVICE') private client: ClientProxy) {}

  actionOne(message: string): string {
    this.client.emit('action_one', { message });
    return 'Message Action One Sent!';
  }

  actionTwo(message: string): string {
    this.client.emit('action_two', { message });
    return 'Message Action Two Sent!';
  }
}
