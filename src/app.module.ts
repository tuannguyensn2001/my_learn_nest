import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import config from "../ormconfig";
import { ConfigModule } from "@nestjs/config";
import { CategoriesModule } from "./module/backend/categories/categories.module";
import database from "./config/database";


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [database]
    }),
    TypeOrmModule.forRoot(config),
    CategoriesModule

  ]
})
export class AppModule {
}
