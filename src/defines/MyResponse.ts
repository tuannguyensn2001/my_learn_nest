import { ApiProperty, getSchemaPath } from '@nestjs/swagger';

export class MyResponse<T> {
  @ApiProperty()
  message: string;
  @ApiProperty()
  data: T;
}

export function convertToSwagger(
  // eslint-disable-next-line @typescript-eslint/ban-types
  schema: string | Function
) {
  return {
    allOf: [
      { $ref: getSchemaPath(MyResponse) },
      {
        properties: {
          data: {
            type: 'object',
            items: { $ref: getSchemaPath(schema) }
          }
        }
      }
    ]
  };
}
