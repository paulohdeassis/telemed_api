import { Module } from '@nestjs/common';
import { ZieloGateway } from './zielo.gateway';

@Module({
  imports: [],
  providers: [ZieloGateway],
  exports: [],
})
export class ZieloModule {}
