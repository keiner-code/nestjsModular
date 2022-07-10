import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';
import { BrandService } from '../services/brand.service';
import { CreateBrand, UpdateBrand } from './../dtos/brand.dtos';

@Controller('brand')
export class BrandController {
  constructor(private brandService: BrandService) {}
  @Get()
  getAll() {
    return this.brandService.findAll();
  }
  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.brandService.findOne(id);
  }
  @Post()
  create(@Body() payload: CreateBrand) {
    return this.brandService.create(payload);
  }
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateBrand) {
    return this.brandService.update(id, payload);
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.brandService.remove(id);
  }
}
