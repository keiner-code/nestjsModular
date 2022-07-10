import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  ParseIntPipe,
  Param,
  Body,
} from '@nestjs/common';
import { CustomerService } from '../services/customer.service';
import { UpdateCustomer, CreateCustomer } from '../dtos/customer.dtos';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}
  @Get()
  getAll() {
    return this.customerService.getAll();
  }
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.customerService.findOne(id);
  }
  @Post()
  postCreate(@Body() payload: CreateCustomer) {
    return this.customerService.create(payload);
  }
  @Put(':id')
  putUpdate(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCustomer,
  ) {
    return this.customerService.update(id, payload);
  }
  @Delete(':id')
  deleteRemove(@Param('id', ParseIntPipe) id: number) {
    return this.customerService.remove(id);
  }
}
