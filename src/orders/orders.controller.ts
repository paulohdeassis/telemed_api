import { Controller, Post, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CompleteOrderDto } from './dto/complete-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CompleteOrderDto) {
    return this.ordersService.create(createOrderDto);
  }
}
