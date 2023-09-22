import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { BasicStrategy } from './auth-basic.strategy';

@Module({
  imports: [PassportModule, ConfigModule],
  providers: [BasicStrategy],
  exports: [],
})
export class AuthModule {}
