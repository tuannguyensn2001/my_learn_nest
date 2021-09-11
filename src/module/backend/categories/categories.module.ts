import { Module } from "@nestjs/common";
import { CategoriesController } from "./categories.controller";
import { CategoriesService } from "./categories.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import Category from "../../../entity/Category";
import validatorProvider from "../../../providers/ValidatorProvider";


@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService, validatorProvider ],
  imports: [
    TypeOrmModule.forFeature([Category])
  ]
})
export class CategoriesModule {
}
