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

  async findAll(skip, take, search, _orderBy, _order) {
    const _orderByFilter: any = {};
    _orderByFilter[_orderBy] = _order === 'asc' ? 'asc' : 'desc';

    const _where: any = {
      name: {
        contains: search,
        mode: 'insensitive',
      },
    };

    const total = await await this.prisma.product.count({
      where: {
        AND: [_where],
      },
    });

    const data = await this.prisma.product.findMany({
      select: {
        id: true,
        name: true,
        status: true,
        amount: true,
        category: { select: { name: true } },
      },
      where: _where,
      skip,
      take,
      orderBy: [{ name: 'desc' }],
    });

    return { total, data };
  }

  async create(createProductDto: CreateProductDto) {
    const { name, price, amount, category_id } = createProductDto;

    return this.prisma.product.create({
      data: {
        name,
        price,
        amount,
        category: {
          connect: { id: category_id },
        },
      },
    });
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
