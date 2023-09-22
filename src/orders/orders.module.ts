import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { OrderCompletedListener } from 'src/listeners/order-completed.listener';
import { WoocommerceOrders } from 'src/integration/woocommerce/orders.woocommerce';
import { AfiliateReferral } from 'src/integration/afiliatewp/referral.afiliate';
import { ViaCep } from 'src/integration/viacep/cep.woocommerce';

@Module({
  controllers: [OrdersController],
  providers: [
    OrdersService,
    OrderCompletedListener,
    WoocommerceOrders,
    AfiliateReferral,
    ViaCep,
  ],
})
export class OrdersModule {}
