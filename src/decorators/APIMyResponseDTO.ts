import { Type } from '@nestjs/common';
import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { MyResponse } from '../defines/MyResponse';

export const APIMyResponseDTO = <TModel extends Type<any>>(model: TModel) => {
  return applyDecorators(
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(MyResponse) },
          {
            properties: {
              data: {
                type: 'array',
                items: { $ref: getSchemaPath(model) }
              }
            }
          }
        ]
        // properties: {
        //   data: {
        //     type: 'array'
        //     // items: { $ref: getSchemaPath(model) }
        //   },
        //   message: {
        //     type: 'string'
        //   }
        // }
      }
    })
  );
};
