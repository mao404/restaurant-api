import { validationResult, check, checkSchema, ValidationChain } from "express-validator";
import { Request, Response, NextFunction, RequestHandler } from "express";
import { AppError } from "../errors/appError";
import * as userService from "../services/userService";

const validResult = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new AppError("Validation errors", 400, errors.array());
  }
  next();
};

// USER AND REGISTER VALIDATIONS

const _nameRequired = check("name", "Name required").not().isEmpty();
const _telephoneRequired = check("telephone", "Telephone required")
  .not()
  .isEmpty();
const _idNumberRequired = check("idNumber", "ID number required")
  .not()
  .isEmpty();

const _idNumberIsNumber = check(
  "idNumber",
  "Cedula is not a number"
).isNumeric();
const _idNumberExist = check("idNumber").custom(async (idNumber = "") => {
  const userFound = await userService.findByIdNumber(Number(idNumber));
  if (userFound) {
    throw new AppError("Cedula already exist in DB", 400);
  }
});

const _emailRequired = check("email", "Email required").not().isEmpty();
const _emailValid = check("email", "Not a valid Email address").isEmail();
const _passwordRequired = check("password", "Password required")
  .not()
  .isEmpty();

const _passwordLength = check("password").custom(async (password = "") => {
  if (password.length < 8) {
    throw new AppError("The password must be longer than 8 characters");
  }
});
const _emailExist = check("email").custom(async (email = "") => {
  const emailFound = await userService.findByEmail(email);
  if (emailFound) {
    throw new AppError("Email already exist in DB", 400);
  }
});

const imageRequired = checkSchema({
  image: {
    custom: {
      options: (value: any, { req, path }: any) => !!req.file,
      errorMessage: "You should upload a file",
    },
  },
});

const userRegisterValidations: ValidationChain[] = [
  _nameRequired,
  _telephoneRequired,
  _idNumberRequired,
  _idNumberIsNumber,
  _idNumberExist,
  _emailRequired,
  _emailValid,
  _emailExist,
  _passwordRequired,
  _passwordLength,
];

export { validResult as validationResult, userRegisterValidations, imageRequired }; 