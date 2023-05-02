const { check } = require("express-validator");
const AppError = require("../../errors/appError");
const userService = require("../../services/userService");
const { validationResult } = require("../common");

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

const postRequestValidations = [
  _nameRequired,
  _telephoneRequired,
  _idNumberRequired,
  _idNumberExist,
  _emailRequired,
  _emailValid,
  _password,
  validationResult,
];

const putRequestValidations = [_idRequired, _idExist, validationResult];

const getRequestByIdValidations = [_idRequired, _idExist, validationResult];

const deleteRequestValidations = [_idRequired, _idExist, validationResult];

const getAllRequestValidations = [];

module.exports = {
  postRequestValidations,
  putRequestValidations,
  getRequestByIdValidations,
  deleteRequestValidations,
  getAllRequestValidations,
};
