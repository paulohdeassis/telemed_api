import { ViaCEPGatewayModule } from 'src/gateway/viacep.gateway.module';

export class ViaCepGateway extends ViaCEPGatewayModule {
  constructor() {
    super({
      baseURL: 'https://viacep.com.br/ws/',
    });
  }
}
