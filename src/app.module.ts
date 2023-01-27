import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [PrismaModule, ProductsModule, OrdersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
