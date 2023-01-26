import { UpdateProductDto } from './../dto/update-product.dto';
import { CreateProductDto } from './../dto/create-product.dto';
import { Injectable } from '@nestjs/common/decorators';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: number) {
    return this.prisma.product.findFirst({ where: { id } });
  }

  async findAll() {
    return this.prisma.product.findMany({});
  }

  async create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({ data: createProductDto });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  remove(id: number) {
    return this.prisma.product.delete({ where: { id } });
  }
}
