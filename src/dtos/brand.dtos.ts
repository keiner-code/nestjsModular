import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
export class CreateBrand {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
export class UpdateBrand extends PartialType(CreateBrand) {}
