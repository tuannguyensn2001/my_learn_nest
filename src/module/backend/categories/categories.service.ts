import { Injectable } from '@nestjs/common';
import { CategoryCreate, CategoryEdit } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Category from '../../../entity/Category';

@Injectable()
export class CategoriesService {
  // eslint-disable-next-line no-unused-vars
  @InjectRepository(Category) private categoryRepository: Repository<Category>;

  constructor(
    @InjectRepository(Category) categoryRepository: Repository<Category>
  ) {
    this.categoryRepository = categoryRepository;
  }

  public async handleCreate(category: CategoryCreate): Promise<Category> {
    const newCategory = await this.categoryRepository.create(category);
    return this.categoryRepository.save(newCategory);
  }

  public async handleGetAll(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }

  public async handleFindCategory(id: number): Promise<Category> {
    try {
      return await this.categoryRepository.findOneOrFail({ id });
    } catch (e) {
      return undefined;
    }
  }

  public async handleUpdate(
    id: number,
    categoryUpdate: CategoryEdit
  ): Promise<Category> {
    try {
      // const category = await this.categoryRepository.findOneOrFail({ id });
      await this.categoryRepository.update({ id }, categoryUpdate);

      return await this.categoryRepository.findOneOrFail({ id });
    } catch (e) {
      return undefined;
    }
  }

  public async handleDelete(id: number) {
    try {
      await this.categoryRepository.findOneOrFail({ id });
      await this.categoryRepository.softDelete(id);
    } catch (e) {}
  }
}
