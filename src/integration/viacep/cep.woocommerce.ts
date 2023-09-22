import { ViaCepGateway } from './viacep.gateway';

export class ViaCep {
  getAddress(cep: string) {
    const res = cep.replace(/\D/g, '');
    return new ViaCepGateway().get(`${res}/json/`);
  }
}
