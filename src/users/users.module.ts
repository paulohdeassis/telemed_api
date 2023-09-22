import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { WoocommerceOrders } from 'src/integration/woocommerce/orders.woocommerce';
import { AfiliateReferral } from 'src/integration/afiliatewp/referral.afiliate';

@Module({
  imports: [UsersModule],
  controllers: [UserController],
  providers: [UserService, WoocommerceOrders, AfiliateReferral],
})
export class UsersModule {}
