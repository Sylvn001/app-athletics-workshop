import { Decimal } from '@prisma/client/runtime';

export class CreateProductDto {
  name: string;
  price: Decimal;
  amount: number;
}
