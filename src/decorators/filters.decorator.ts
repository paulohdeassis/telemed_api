import {
  createParamDecorator,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

export interface QueryDecorator {
  per_page: number;
  page: number;
}

export const QueryDecorator = createParamDecorator(
  (data: any, ctx: ExecutionContext): QueryDecorator => {
    const request = ctx.switchToHttp().getRequest();

    const all_filter = {};

    const { per_page = 20, page = 1 } = request.query;

    if (per_page > 100) {
      throw new HttpException('per_page no accept', HttpStatus.BAD_REQUEST);
    }

    all_filter['per_page'] = parseInt(per_page);
    all_filter['page'] = parseInt(page);

    return all_filter as QueryDecorator;
  },
);
