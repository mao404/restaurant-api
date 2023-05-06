const { check } = require("express-validator");
const AppError = require("../../errors/appError");
const userService = require("../../services/userService");
const { validationResult } = require("../common");
const { ROLES, ADMIN_ROLE, CHEF_ROLE } = require("../../constants/index");
const { validJWT, hasRole } = require("../auth/");

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

const _idRequired = check("id", "ID is required").not().isEmpty();
const _idExist = check("id").custom(async (id = "") => {
  const userFound = await userService.findById(id);
  if (!userFound) {
    throw new AppError("The ID does not exist in DB", 400);
  }
});

const _emailRequired = check("email", "Email required").not().isEmpty();
const _emailValid = check("email", "Not a valid Email address").isEmail();
const _password = check("password", "Password required").not().isEmpty();

const _optionalEmailValid = check("email", "Email is invalid")
  .optional()
  .isEmail();
const _optionalEmailExist = check("email")
  .optional()
  .custom(async (email = "") => {
    const userFound = await userService.findByEmail(email);
    if (userFound) {
      throw new AppError("Email already exist in DB", 400);
    }
  });

const _roleValid = check("role")
  .optional()
  .custom(async (role = "") => {
    if (!ROLES.includes(role)) {
      throw new AppError("Invalid role", 400);
    }
  });

const postRequestValidations = [
  validJWT,
  hasRole(ADMIN_ROLE),
  _nameRequired,
  _telephoneRequired,
  _idNumberRequired,
  _idNumberExist,
  _emailRequired,
  _emailValid,
  _password,
  _roleValid,
  validationResult,
];

const putRequestValidations = [
  validJWT,
  hasRole(ADMIN_ROLE),
  _idRequired,
  _idExist,
  _optionalEmailValid,
  _optionalEmailExist,
  _roleValid,
  validationResult,
];

const getRequestByIdValidations = [
  validJWT,
  _idRequired,
  _idExist,
  validationResult,
];

const deleteRequestValidations = [
  validJWT,
  hasRole(ADMIN_ROLE),
  _idRequired,
  _idExist,
  validationResult,
];

const getAllRequestValidations = [validJWT];

module.exports = {
  postRequestValidations,
  putRequestValidations,
  getRequestByIdValidations,
  deleteRequestValidations,
  getAllRequestValidations,
};
