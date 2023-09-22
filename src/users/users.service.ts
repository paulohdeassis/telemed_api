import { Injectable } from '@nestjs/common';
import { QueryDecorator } from 'src/decorators/filters.decorator';
import { AfiliateReferral } from 'src/integration/afiliatewp/referral.afiliate';
import { WoocommerceOrders } from 'src/integration/woocommerce/orders.woocommerce';

@Injectable()
export class UserService {
  constructor(
    private woocommerceOrders: WoocommerceOrders,
    private afiliateReferrals: AfiliateReferral,
  ) {}

  /* async getUserOrders() {
    const orders = await this.woocommerceOrders.getCompleted();
    const referrals = await this.afiliateReferrals.get();

    const payload = orders.map((order) => ({
      id: order.id,
      date_created: order.date_created,
      user: {
        first_name: order.billing.first_name,
        last_name: order.billing.last_name,
        address_1: order.billing.address_1,
        address_2: order.billing.address_2,
        number: order.billing.number,
        neighborhood: order.billing.neighborhood,
        city: order.billing.city,
        state: order.billing.state,
        postcode: order.billing.postcode,
        country: order.billing.country,
        sex: order.billing.sex,
        phone: order.billing.phone,
        cellphone: order.billing.cellphone,
        cpf: order.billing.cpf,
        cnpj: order.billing.cnpj,
        rg: order.billing.rg,
      },
      product: {
        id: order.line_items[0].product_id,
        name: order.line_items[0].name,
      },
      refferal: referrals.find(
        (el) => Number(el.customer_id) === Number(order.customer_id),
      ),
    }));

    return payload;
  } 

  getReferrals() {
    return this.afiliateReferrals.get();
  }

  async getSubscribers(query: QueryDecorator) {
    const subs = await this.woocommerceOrders.getSubscribers(query);
    const afiliateReferrals = await this.afiliateReferrals.get();

    const payload = await Promise.all(
      subs.map(async (sub) => {
        const subscriber = {
          id: sub.id,
          first_name: sub.billing.first_name,
          last_name: sub.billing.last_name,
          address_1: sub.billing.address_1,
          address_2: sub.billing.address_2,
          number: sub.billing.number,
          neighborhood: sub.billing.neighborhood,
          city: sub.billing.city,
          state: sub.billing.state,
          postcode: sub.billing.postcode,
          country: sub.billing.country,
          sex: sub.billing.sex,
          phone: sub.billing.phone,
          cellphone: sub.billing.cellphone,
          cpf: sub.billing.cpf,
          cnpj: sub.billing.cnpj,
          rg: sub.billing.rg,
        };

        let subscriptions = await this.woocommerceOrders.getSubscriptions(
          sub.id,
        );

        subscriptions = subscriptions.map((el) => ({
          id: el.id,
          status: el.status,
        }));

        let orders = await this.woocommerceOrders.getUserOrders(sub.id);

        orders = orders.map((el) => ({
          id: el.id,
          date_created: el.date_created,
          product_id: el.line_items[0].id,
        }));

        let referrals = [];

        for (const order of orders) {
          afiliateReferrals.forEach((el) => {
            if (Number(el.reference) === Number(order.id)) referrals.push(el);
          });
        }

        referrals = referrals.map((el) => ({
          affiliate_id: el.affiliate_id,
          amount: el.amount,
        }));

        return {
          subscriber,
          subscriptions,
          orders,
          referrals,
        };
      }),
    );

    return payload;
  }
*/
  getClients() {
    return this.woocommerceOrders.getClients();
  }
}
