import { AfiliateGateway } from './afiliate.gateway';

export class AfiliateReferral {
  get(order_id) {
    return new AfiliateGateway().get(
      `/affwp/v1/referrals?reference=${order_id}`,
    );
  }
}
