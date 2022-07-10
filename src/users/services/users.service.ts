import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateUsers, UpdateUsers } from '../dtos/users.dtos';
import { User } from '../entities/user.entity';
import { Order } from '../entities/order.entities';
import { ProductsService } from './../../products/services/products.service';

@Injectable()
export class UsersService {
  private user: User[] = [];
  private cont = 0;
  constructor(
    private productsService: ProductsService,
    private configService: ConfigService,
  ) {}

  findAll() {
    const apiKey = this.configService.get('API_KEY');
    const dbName = this.configService.get('DATABASE_NAME');
    console.log(apiKey, dbName);
    return this.user;
  }
  findOne(id: number) {
    return this.user.find((item) => item.id === id);
  }
  create(payload: CreateUsers) {
    this.cont = this.cont + 1;
    const newUser = {
      id: this.cont,
      ...payload,
    };
    this.user.push(newUser);
    return newUser;
  }
  getOrdersByUsers(id: number): Order {
    const user = this.findOne(id);
    return {
      date: new Date(),
      user,
      products: this.productsService.findAll(),
    };
  }
}
