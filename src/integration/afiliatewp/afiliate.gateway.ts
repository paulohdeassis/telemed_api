import { AfiliateGatewayModule } from 'src/gateway/afiliate.gateway.module';

export class AfiliateGateway extends AfiliateGatewayModule {
  constructor() {
    super({
      baseURL: 'https://grupotelemed.com.br/wp-json',
    });
  }
}
