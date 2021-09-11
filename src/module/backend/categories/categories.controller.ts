import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  NotFoundException,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { CategoryCreate, CategoryDTO, CategoryEdit } from './dto';
import { CategoriesService } from './categories.service';
import { convertToSwagger, MyResponse } from '../../../defines/MyResponse';
import Category from '../../../entity/Category';
import Validator from '../../../common/Validator';
import MyValidator from '../../../common/Joi';
import {
  ApiExtraModels,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags
} from '@nestjs/swagger';
import { APIMyResponseDTO } from '../../../decorators/APIMyResponseDTO';

@ApiTags('backend/category')
@ApiExtraModels(MyResponse, CategoryDTO)
@Controller('/api/backend/v1/categories')
export class CategoriesController {
  @Inject('VALIDATOR') private validator: Validator;

  private service: CategoriesService;

  constructor(
    service: CategoriesService,
    @Inject('VALIDATOR') validator: Validator
  ) {
    this.service = service;
    this.validator = validator;
  }

  @APIMyResponseDTO(CategoryDTO)
  @Get()
  public async index(): Promise<MyResponse<Category[]>> {
    const result = await this.service.handleGetAll();

    return {
      message: 'Lấy thông tin thành công',
      data: result
    };
  }

  @ApiOkResponse({ description: 'Api trả thành công', type: MyResponse })
  @ApiNotFoundResponse({ description: 'Không tìm thấy' })
  @Get('/:id')
  public async show(@Param('id') id: string): Promise<MyResponse<Category>> {
    const result: Category | undefined = await this.service.handleFindCategory(
      Number(id)
    );

    if (!result) throw new NotFoundException('Không tồn tại bản ghi này');

    return {
      message: 'Lấy thành công',
      data: result
    };
  }

  @Post()
  public async store(
    @Body() category: CategoryCreate
  ): Promise<MyResponse<Category>> {
    this.validator.validate({
      name: MyValidator.string().required().messages({
        'any.required': 'Tên không được để trống'
      }),
      description: MyValidator.string().required().messages({
        'any.required': 'Mô  tả không được để trống'
      }),
      slug: MyValidator.string().required().messages({
        'any.required': 'Slug không được để trống'
      })
    });

    await this.validator.throwValidateError(category);

    const newCategory: Category = await this.service.handleCreate(category);

    return {
      message: 'Thêm mới thành công',
      data: newCategory
    };
  }

  @Put(':id')
  public async update(
    @Body() category: CategoryEdit,
    @Param('id') id: string
  ): Promise<MyResponse<Category>> {
    const result: Category | undefined = await this.service.handleUpdate(
      Number(id),
      category
    );

    if (!result) {
      throw new NotFoundException('Không tồn tại');
    }

    return {
      message: 'Cập nhật thành công',
      data: result
    };
  }

  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<MyResponse<null>> {
    await this.service.handleDelete(Number(id));
    return {
      message: 'Xóa thành công',
      data: null
    };
  }
}
