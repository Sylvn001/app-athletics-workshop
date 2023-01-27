import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersRepository } from './repositories/orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly orderRepository: OrdersRepository) {}
  create(createOrderDto: CreateOrderDto) {
    this.orderRepository.create(createOrderDto);
  }

  findAll() {
    return this.orderRepository.findAll();
  }

  findOne(id: number) {
    return this.orderRepository.findOne(id);
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.orderRepository.update(id, updateOrderDto);
  }

  remove(id: number) {
    return this.orderRepository.remove(id);
  }
}
