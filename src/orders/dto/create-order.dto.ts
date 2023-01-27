import { Decimal } from '@prisma/client/runtime';
export class CreateOrderDto {
  full_price: Decimal;
  user_id: number;
}
