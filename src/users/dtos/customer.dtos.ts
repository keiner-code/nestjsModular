import { IsString, IsNotEmpty, IsEmail } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCustomer {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
}

export class UpdateCustomer extends PartialType(CreateCustomer) {}
