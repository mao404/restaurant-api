const { check } = require("express-validator");
const AppError = require("../../errors/appError");
const orderService = require("../../services/orderService");
const { validationResult } = require("../common");
const { ADMIN_ROLE } = require("../../constants/index");
const { validJWT, hasRole } = require("../auth");

// const _qtyRequired = check("quantity", "Quantity is not a number").isNumeric();
// const _menuIdRequired = check("MenuId", "Menu ID is not a number").isNumeric();
// const _optionalCommentValid = check("comment", "Comment is not a string").optional().isString();
const _optionalTotalPriceValid = check(
  "totalPrice",
  "Total price is not a number"
)
  .optional()
  .isNumeric();

const _idRequired = check("id", "ID is required").not().isEmpty();
const _idExist = check("id").custom(async (id = "") => {
  const orderFound = await orderService.findById(id);
  if (!orderFound) {
    throw new AppError("The ID does not exist in DB", 400);
  }
});

const postRequestValidations = [
  validJWT,
  hasRole(ADMIN_ROLE),
  _optionalTotalPriceValid,
  validationResult,
];

const putRequestValidations = [
  validJWT,
  hasRole(ADMIN_ROLE),
  _optionalTotalPriceValid,
  validationResult,
];

const getRequestByIdValidations = [
  validJWT,
  hasRole(ADMIN_ROLE),
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

const getAllRequestValidations = [validJWT, hasRole(ADMIN_ROLE)];

module.exports = {
  postRequestValidations,
  putRequestValidations,
  getRequestByIdValidations,
  deleteRequestValidations,
  getAllRequestValidations,
};
