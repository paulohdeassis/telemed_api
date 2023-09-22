import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { WooCommerceModule } from './integration/woocommerce/woocommerce.module';
import { AfiliateModule } from './integration/afiliatewp/afiliate.module';
import { AuthModule } from './auth/auth.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    WooCommerceModule,
    EventEmitterModule.forRoot(),
    ConfigModule.forRoot(),
    AfiliateModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
