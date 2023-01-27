import { Product, statusEnum } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';

export class ProductEntity implements Product {
  id: number;
  name: string;
  price: Decimal;
  amount: number;
  category_id: number;
  status: statusEnum;
}
