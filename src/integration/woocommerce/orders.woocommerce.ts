import { QueryDecorator } from 'src/decorators/filters.decorator';
import { WoocCommerceGateway } from './woocommerce.gateway';

export class WoocommerceOrders {
  getUserOrders(user_id: number) {
    return new WoocCommerceGateway().get(`/wc/v3/orders?customer=${user_id}`);
  }

  getOrder(order_id: number) {
    return new WoocCommerceGateway().get(`/wc/v3/orders/${order_id}`);
  }

  getSubscribers(query: QueryDecorator) {
    return new WoocCommerceGateway().get(
      `/wc/v3/customers?role=subscriber&page=${query.page}&per_page=${query.per_page}`,
    );
  }

  getClients() {
    return new WoocCommerceGateway().get('/wc/v3/customers?role=customer');
  }

  getSubscriptions(sub_id) {
    return new WoocCommerceGateway().get(
      `/wc/v3/subscriptions?customer=${sub_id}`,
    );
  }
}
