import { ZieloGatewayModule } from 'src/gateway/zielo.gateway.module';

export class ZieloGateway extends ZieloGatewayModule {
  constructor() {
    super({
      baseURL: process.env.ZIELO_BASE_URL,
    });
  }
}
