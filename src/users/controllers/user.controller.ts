import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
} from '@nestjs/common';
import { UsersService } from './../services/users.service';
import { CreateUsers, UpdateUsers } from '../dtos/users.dtos';

@Controller('user')
export class UserController {
  constructor(private userService: UsersService) {}
  @Get()
  getAll() {
    return this.userService.findAll();
  }
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }
  @Get(':id/orders')
  getOrders(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getOrdersByUsers(id);
  }
  @Post()
  postOrders(@Body() payload: CreateUsers) {
    return this.userService.create(payload);
  }
}
