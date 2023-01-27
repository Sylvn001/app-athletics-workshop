import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Query } from '@nestjs/common/decorators';
import { skip, take } from 'rxjs';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  //localhost:3000/products?skip=0
  @Get()
  findAll(
    @Query('skip') skip = 0,
    @Query('take') take = 10,
    @Query('search') search,
    @Query('orderBy') _orderBy = 'name', // field
    @Query('order') _order = 'asc',
  ) {
    return this.productsService.findAll(+skip, +take, search, _orderBy, _order);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
