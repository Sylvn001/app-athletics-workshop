import { ProductsRepository } from './repositories/products.repository';
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  create(createProductDto: CreateProductDto) {
    return this.productsRepository.create(createProductDto);
  }

  findAll(skip, take, search, _orderBy, _order) {
    return this.productsRepository.findAll(
      skip,
      take,
      search,
      _orderBy,
      _order,
    );
  }

  findOne(id: number) {
    return this.productsRepository.findOne(id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productsRepository.update(id, updateProductDto);
  }

  remove(id: number) {
    return this.productsRepository.remove(id);
  }
}
