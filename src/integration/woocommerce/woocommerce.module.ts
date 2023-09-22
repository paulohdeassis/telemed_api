import { Module } from '@nestjs/common';
import { WoocCommerceGateway } from './woocommerce.gateway';
import { WoocommerceOrders } from './orders.woocommerce';
@Module({
  imports: [],
  providers: [WoocCommerceGateway, WoocommerceOrders],
  exports: [WoocommerceOrders],
})
export class WooCommerceModule {}
