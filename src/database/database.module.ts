import { Module, Global } from '@nestjs/common';

const API_KEY = '3532626';
const API_KEY_PROD = 'PRO3532626';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
