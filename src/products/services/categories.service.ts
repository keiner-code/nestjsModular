import { Injectable, NotFoundException } from '@nestjs/common';
import { Categories } from '../entities/categories.entity';

@Injectable()
export class CategoriesService {
  private categories: Categories[] = [];
  findAll() {
    return this.categories;
  }
  findOne(id: number) {
    return this.categories.find((item) => item.id === id);
  }
  create(payload: any) {
    return this.categories.push(payload);
  }
  update(id: number, payload: any) {
    const categories = this.findOne(id);
    if (categories) {
      const index = this.categories.findIndex((item) => item.id === id);
      this.categories[index] = {
        ...categories,
        ...payload,
      };
      return this.categories[index];
    }
  }
  remove(id: number) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`categories ${id} Not Found`);
    }
    return this.categories.splice(index, 1);
  }
}
