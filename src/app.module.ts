import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from '../ormconfig';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from './module/backend/categories/categories.module';
import { configuaration } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuaration]
    }),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    CategoriesModule
  ]
})
export class AppModule {}
