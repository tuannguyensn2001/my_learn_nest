import { HttpException, HttpStatus } from "@nestjs/common";

export default class ValidateException extends HttpException {
  constructor(message: string) {
    super({
      message,
      data: null,
      statusCode: 500
    }, HttpStatus.BAD_REQUEST);
  }

}