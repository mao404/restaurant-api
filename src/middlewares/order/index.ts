import { check } from "express-validator";
import { RequestHandler } from "express";
import { AppError } from "../../errors/appError";
import * as orderService from "../../services/orderService";
import { validationResult } from "../common";
import { ADMIN_ROLE } from "../../constants/index";
import { validJWT, hasRole } from "../auth";

const _qtyRequired = check("orders.*.quantity", "Quantity is required")
  .not()
  .isEmpty();
const _qtyNumeric = check(
  "orders.*.quantity",
  "Quantity is not a number",
).isNumeric();
const _menuIdRequired = check("orders.*.quantity", "Menu ID is required")
  .not()
  .isEmpty();
const _menuIdNumeric = check(
  "orders.*.MenuId",
  "Menu ID is not a number",
).isNumeric();
const _optionalCommentValid = check(
  "orders.*.comment",
  "Comment is not a string",
)
  .optional()
  .isString();
const _optionalTotalPriceValid = check(
  "totalPrice",
  "Total price is not a number",
)
  .optional()
  .isNumeric();

const _idRequired = check("id", "ID is required").not().isEmpty();
const _idExist = check("id").custom(async (id = "") => {
  const orderFound = await orderService.findById(Number(id));
  if (!orderFound) {
    throw new AppError("The ID does not exist in DB", 400);
  }
});

const postRequestValidations: RequestHandler[] = [
  validJWT,
  hasRole(ADMIN_ROLE),
  _qtyRequired,
  _qtyNumeric,
  _menuIdRequired,
  _menuIdNumeric,
  _optionalCommentValid,
  _optionalTotalPriceValid,
  validationResult,
];

const putRequestValidations: RequestHandler[] = [
  validJWT,
  hasRole(ADMIN_ROLE),
  _optionalTotalPriceValid,
  _idRequired,
  _idExist,
  validationResult,
];

const getRequestByIdValidations: RequestHandler[] = [
  validJWT,
  hasRole(ADMIN_ROLE),
  _idRequired,
  _idExist,
  validationResult,
];

const deleteRequestValidations: RequestHandler[] = [
  validJWT,
  hasRole(ADMIN_ROLE),
  _idRequired,
  _idExist,
  validationResult,
];

const getAllRequestValidations: RequestHandler[] = [validJWT, hasRole(ADMIN_ROLE)];

export {
  postRequestValidations,
  putRequestValidations,
  getRequestByIdValidations,
  deleteRequestValidations,
  getAllRequestValidations,
}; 