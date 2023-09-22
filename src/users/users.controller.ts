import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { QueryDecorator } from 'src/decorators/filters.decorator';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  /* 

  @Get('orders')
  getOrders() {
    return this.userService.getUserOrders();
  }

  @Get('referral')
  getReferrals() {
    return this.userService.getReferrals();
  }

  @Get('clients')
  clients() {
    return this.userService.getClients();
  }

  */

  @Get('subscribers')
  @UseGuards(AuthGuard('basic'))
  subscribers(@QueryDecorator() query) {
    //return this.userService.getSubscribers(query);
  }
}
