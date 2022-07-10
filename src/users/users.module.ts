import { Module } from '@nestjs/common';
import { CustomerController } from './controllers/customer.controller';
import { UserController } from './controllers/user.controller';
import { CustomerService } from './services/customer.service';
import { UsersService } from './services/users.service';
import { ProductsModule } from './../products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [CustomerController, UserController],
  providers: [CustomerService, UsersService],
})
export class UsersModule {}
