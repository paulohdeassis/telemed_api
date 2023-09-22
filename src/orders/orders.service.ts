import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { CompleteOrderDto } from './dto/complete-order.dto';
import { WoocommerceOrders } from 'src/integration/woocommerce/orders.woocommerce';
import { AfiliateReferral } from 'src/integration/afiliatewp/referral.afiliate';
import { ViaCep } from 'src/integration/viacep/cep.woocommerce';

@Injectable()
export class OrdersService {
  constructor(
    private eventEmitter: EventEmitter2,
    private woocommerceOrders: WoocommerceOrders,
    private afiliateReferrals: AfiliateReferral,
    private viaCep: ViaCep,
  ) {}
  async create(createOrderDto: CompleteOrderDto) {
    const order = await this.woocommerceOrders.getOrder(createOrderDto.arg);
    let salesPerson = null;

    try {
      const refferals = await this.afiliateReferrals.get(order.id);
      salesPerson = refferals.affiliate_id;
    } catch (error) {
      console.log(error);
      salesPerson = '';
    }

    console.log(salesPerson);
    // const orderRefferal = refferals.filter(
    //   (el) => el.reference === order.id.toString(),
    // );

    const address = await this.viaCep.getAddress(order.billing.postcode);
    const birthArr = order.billing.billing_birthdate.split('/');
    const parsedPhone = order.billing.phone.replace(/\D/g, '');

    const payload = {
      nome: `${order.billing.first_name} ${order.billing.last_name}`,
      email: order.billing.email,
      cpf: order.billing.cpf,
      sexo: order.billing.sex,
      vendedor_id: salesPerson,
      corretor_pessoa_id: '',
      cep: order.billing.postcode,
      cidade_id: address.ibge,
      logradouro: address.logradouro,
      bairro: address.bairro,
      tipo_telefone_id: 2,
      numero_casa: order.billing.number,
      complemento: '',
      telefone: parsedPhone,
      tipo_endereco_id: 2,
      plano_id: Number(order.line_items[0].product_id),
      data_nasc: `${birthArr[2]}-${birthArr[1]}-${birthArr[0]}`,
      data_inclusao: order.date_modified.split('T')[0],
    };

    return this.eventEmitter.emit('order.completed', payload);
  }
}
