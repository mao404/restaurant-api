import { check } from "express-validator";
import { RequestHandler } from "express";
import { AppError } from "../../errors/appError";
import * as inventoryService from "../../services/inventoryService";
import { validationResult } from "../common";
import { ADMIN_ROLE } from "../../constants/index";
import { validJWT, hasRole } from "../auth";

const _titleRequired = check("title", "Title required").not().isEmpty();
const _unitRequired = check("unitType", "Type of measurement required")
  .not()
  .isEmpty();
const _quantityRequired = check("quantity", "Quantity required")
  .not()
  .isEmpty();
const _itemExist = check("title").custom(async (inventory = "") => {
  const itemFound = await inventoryService.findByTitle(inventory);
  if (itemFound) {
    throw new AppError("Inventory listed already exist in DB", 400);
  }
});

const _idRequired = check("id", "ID is required").not().isEmpty();
const _idExist = check("id").custom(async (id = "") => {
  const itemFound = await inventoryService.findById(Number(id));
  if (!itemFound) {
    throw new AppError("The ID does not exist in DB", 400);
  }
});

const postRequestValidations: RequestHandler[] = [
  validJWT,
  _titleRequired,
  _unitRequired,
  _quantityRequired,
  _itemExist,
  validationResult,
];

const putRequestValidations: RequestHandler[] = [
  validJWT,
  hasRole(ADMIN_ROLE),
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