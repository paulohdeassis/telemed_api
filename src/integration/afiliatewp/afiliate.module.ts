import { Module } from '@nestjs/common';
import { AfiliateGateway } from './afiliate.gateway';
import { AfiliateReferral } from './referral.afiliate';
@Module({
  imports: [],
  providers: [AfiliateGateway, AfiliateReferral],
  exports: [AfiliateReferral],
})
export class AfiliateModule {}
