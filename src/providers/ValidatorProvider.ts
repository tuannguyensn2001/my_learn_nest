import Validator from "../common/Validator";

const validatorProvider = {
  provide: "VALIDATOR",
  useClass: Validator
};

export default validatorProvider;