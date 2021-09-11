import { ApiProperty } from '@nestjs/swagger';

export class CategoryCreate {
  @ApiProperty()
  name: string;
  @ApiProperty()
  slug: string;
  @ApiProperty()
  description: string;
}

export class CategoryEdit extends CategoryCreate {}

export class CategoryDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  slug: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  created_at: string;

  @ApiProperty()
  updated_at: string;
}
