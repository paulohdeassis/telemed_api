import { WooCommerceGatewayModule } from 'src/gateway/woocommerce.gateway.module';

export class WoocCommerceGateway extends WooCommerceGatewayModule {
  constructor() {
    super({
      baseURL: 'https://grupotelemed.com.br/wp-json',
    });
  }
}
