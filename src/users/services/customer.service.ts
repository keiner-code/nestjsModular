import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from '../entities/customer.entity';

@Injectable()
export class CustomerService {
  private customer: Customer[] = [];
  getAll() {
    return this.customer;
  }
  findOne(id: number) {
    return this.customer.find((item) => item.id === id);
  }
  create(payload: any) {
    return this.customer.push(payload);
  }
  update(id: number, payload: any) {
    const customer = this.findOne(id);
    if (customer) {
      const index = this.customer.findIndex((item) => item.id === id);
      this.customer[index] = {
        ...customer,
        ...payload,
      };
    }
  }
  remove(id: number) {
    const index = this.customer.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Cuatomer ${id} Not Found`);
    }
  }
}
