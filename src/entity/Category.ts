import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export default class Category {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  slug: string;

  @ApiProperty()
  @Column()
  description: string;

  // @Column()
  // created_by: number;

  @ApiProperty()
  @CreateDateColumn({
    type: 'timestamp'
  })
  created_at: Date;

  @ApiProperty()
  @UpdateDateColumn({
    type: 'timestamp'
  })
  updated_at: Date;

  @DeleteDateColumn({
    type: 'timestamp'
  })
  deleted_at: Date;
}
