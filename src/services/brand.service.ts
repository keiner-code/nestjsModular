import { Injectable, NotFoundException } from '@nestjs/common';
import { Brand } from '../entities/brand.entity';

@Injectable()
export class BrandService {
  private brand: Brand[] = [];
  findAll() {
    return this.brand;
  }
  findOne(id: number) {
    return this.brand.find((item) => item.id === id);
  }
  create(payload: any) {
    return this.brand.push(payload);
  }
  update(id: number, payload: any) {
    const brand = this.findOne(id);
    if (brand) {
      const index = this.brand.findIndex((index) => index.id === id);
      this.brand[index] = {
        ...brand,
        ...payload,
      };
      return this.brand[index];
    }
    return null;
  }
  remove(id: number) {
    const index = this.brand.findIndex((index) => index.id === id);
    if (index === -1) {
      throw new NotFoundException(`brand ${id} Not Found`);
    }
    return this.brand.splice(index, 1);
  }
}
