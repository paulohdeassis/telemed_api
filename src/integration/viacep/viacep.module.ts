import { Module } from '@nestjs/common';
import { ViaCepGateway } from './viacep.gateway';
import { ViaCep } from './cep.woocommerce';

@Module({
  imports: [],
  providers: [ViaCepGateway],
  exports: [ViaCep],
})
export class ViaCEPModule {}
