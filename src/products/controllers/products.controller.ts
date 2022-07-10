import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateProductDto } from './../dtos/products.dtos';
import { ProductsService } from './../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}
  @Get(':id')
  getProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productService.findOne(id);
  }
  @Get()
  getProducts() {
    return this.productService.findAll();
  }
  @Post()
  postProducts(@Body() payload: CreateProductDto) {
    return this.productService.create(payload);
  }
}
