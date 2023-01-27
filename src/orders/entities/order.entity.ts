import { Order } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';

export class OrderEntity implements Order {
  id: number;
  full_price: Decimal;
  user_id: number;
  createdAt: Date;
  updatedAt: Date;
}
