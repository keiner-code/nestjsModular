import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { CategoriesService } from '../services/categories.service';
import { CreateCategories, UpdateCategories } from '../dtos/categories.dtos';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}
  @Get()
  getAll() {
    return this.categoriesService.findAll();
  }
  @Get(':idproduct')
  getOne(@Param('idproduct', ParseIntPipe) idproduct: number) {
    return this.categoriesService.findOne(idproduct);
  }
  @Post()
  postCreate(@Body() payload: CreateCategories) {
    return this.categoriesService.create(payload);
  }
  @Put(':id')
  putUpdate(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCategories,
  ) {
    return this.categoriesService.update(id, payload);
  }
  @Delete(':id')
  DeleteRemove(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.remove(id);
  }
}
