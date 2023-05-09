const { validationResult, check } = require("express-validator");
const AppError = require("../errors/appError");
const userService = require("../services/userService");

const validResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new AppError("Validation errors", 400, errors.errors);
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
const _idNumberExist = check("idNumber").custom(async (idNumber = "") => {
  const userFound = await userService.findByIdNumber(idNumber);
  if (userFound) {
    throw new AppError("Cedula already exist in DB", 400);
  }
});

const _emailRequired = check("email", "Email required").not().isEmpty();
const _emailValid = check("email", "Not a valid Email address").isEmail();
const _passwordRequired = check("password", "Password required")
  .not()
  .isEmpty();
const _emailExist = check("email").custom(async (email = "") => {
  const emailFound = await userService.findByEmail(email);
  if (emailFound) {
    throw new AppError("Email already exist in DB", 400);
  }
});

const userRegisterValidations = [
  _nameRequired,
  _telephoneRequired,
  _idNumberRequired,
  _idNumberExist,
  _emailRequired,
  _emailValid,
  _emailExist,
  _passwordRequired,
];

module.exports = {
  validationResult: validResult,
  userRegisterValidations,
};
