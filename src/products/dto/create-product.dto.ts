import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime';
import { IsString, IsDecimal, IsNumber } from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsDecimal()
  price: Decimal;

  @ApiProperty()
  @IsNumber()
  amount: number;

  @IsNumber()
  category_id: number;
}
