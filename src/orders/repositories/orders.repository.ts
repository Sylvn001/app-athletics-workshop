import { UpdateOrderDto } from './../dto/update-order.dto';
import { CreateOrderDto } from './../dto/create-order.dto';
import { Injectable } from '@nestjs/common/decorators';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrdersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: number) {
    return this.prisma.order.findFirst({ where: { id } });
  }

  async findAll() {
    return this.prisma.order.findMany();
  }

  async create(createOrderDto: CreateOrderDto) {
    return this.prisma.order.create({ data: createOrderDto });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    // return this.prisma.order.update({ where: { id, data: updateOrderDto } });
  }

  async remove(id: number) {
    return this.prisma.order.delete({ where: { id } });
  }
}
