import { ObjectSchema, SchemaMap } from "joi";
import Joi from "./Joi";
import { Injectable } from "@nestjs/common";
import ValidateException from "../exceptions/ValidateException";

@Injectable()
export default class Validator {

  private schema: ObjectSchema<any>;

  public validate<TSchema = any, isStrict = false, T = TSchema>(schema?: SchemaMap<any, isStrict>) {
    this.schema = Joi.object(schema);
  }

  public async throwValidateError(payload) {

    if (!this.schema) throw new Error("Không hợp lệ");

    try {
      await this.schema.validateAsync(payload);
    } catch (e) {
      throw new ValidateException(e.message);
    }
  }

}