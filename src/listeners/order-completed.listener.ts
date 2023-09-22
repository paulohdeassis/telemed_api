import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { OrderEvent } from 'src/events/order-completed.event';
import { ZieloGateway } from 'src/integration/zielo/zielo.gateway';

@Injectable()
export class OrderCompletedListener {
  @OnEvent('order.completed')
  handleOrderCompletedEvent(event: OrderEvent) {
    console.log(event);
    return new ZieloGateway().post('', event);
  }
}
