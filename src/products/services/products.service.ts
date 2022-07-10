import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';

@Injectable()
export class ProductsService {
  private conterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'brand1',
      description: 'bla bla',
      price: 2445,
      image: '',
      stock: 12,
    },
  ];
  findAll() {
    return this.products;
  }
  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product ${id} Not Found`);
    }
    return product;
  }
  create(payload: CreateProductDto) {
    console.log(payload);
    this.conterId += this.conterId;
    const newProduct = {
      id: this.conterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((index) => index.id === id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }
  remove(id: number) {
    const index = this.products.findIndex((index) => index.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product ${id} Not Found`);
    }
    return this.products.splice(index, 1);
  }
}
