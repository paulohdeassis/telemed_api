import axios, { AxiosRequestConfig } from 'axios';
import { HttpException, HttpStatus } from '@nestjs/common';
import axiosRetry from 'axios-retry';
import addOAuthInterceptor from 'axios-oauth-1.0a';

export interface RequestParams {
  endpoint: string;
  config: AxiosRequestConfig;
  data: any;
}

export class WooCommerceGatewayModule {
  private api;

  constructor(config: AxiosRequestConfig) {
    this.api = axios.create(config);

    addOAuthInterceptor(this.api, {
      algorithm: 'HMAC-SHA1',
      key: process.env.COSTUMER_KEY,
      secret: process.env.COSTUMER_SECRET,
    });

    axiosRetry(this.api, {
      retries: 3,
      retryDelay: (retryCount) => {
        return retryCount * 1000;
      },
      retryCondition: () => true,
    });
  }

  private request(
    method: 'get',
    { endpoint = '', data, config = {} }: Partial<RequestParams>,
  ) {
    return this.api({
      method,
      url: endpoint,
      data: data,
      ...config,
    })
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        console.log(error);
        throw new HttpException(
          error.response?.data?.errors ||
            error.response?.data?.message ||
            error.response?.data.error ||
            error.response?.data,
          error.response.status || HttpStatus.BAD_REQUEST,
        );
      });
  }

  public get(endpoint, config: AxiosRequestConfig = {}) {
    return this.request('get', {
      endpoint: endpoint,
      config: config,
    });
  }
}
