import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
export class CreateUsers {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly lastName: string;
}
export class UpdateUsers extends PartialType(CreateUsers) {}
