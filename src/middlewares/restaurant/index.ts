import { check } from "express-validator";
import { RequestHandler } from "express";
import multer from "multer";
const upload = multer();
import { AppError } from "../../errors/appError";
import * as restaurantService from "../../services/restaurantService";
import { validationResult, imageRequired } from "../common";
import { ADMIN_ROLE } from "../../constants/index";
import { validJWT, hasRole } from "../auth";

const _nameRequired = check("name", "Name required").not().isEmpty();
const _capacityRequired = check("capacity", "Capacity required")
  .not()
  .isEmpty();
const _rifRequired = check("rif", "RIF required").not().isEmpty();
const _addressRequired = check("address", "Address required").not().isEmpty();
const _restExist = check("name").custom(async (name) => {
  const resFound = await restaurantService.findByName(name);
  if (resFound) {
    throw new AppError("Restaurant listed in DB", 400);
  }
});

const _idRequired = check("id", "ID is required").not().isEmpty();
const _idExist = check("id").custom(async (id = "") => {
  const resFound = await restaurantService.findById(Number(id));
  if (!resFound) {
    throw new AppError("The ID does not exist in DB", 400);
  }
});

const postRequestValidations: RequestHandler[] = [
  validJWT,
  hasRole(ADMIN_ROLE),
  _nameRequired,
  _capacityRequired,
  _rifRequired,
  _addressRequired,
  _restExist,
  validationResult,
];

const postImageRequestValidations: any[] = [
  validJWT,
  hasRole(ADMIN_ROLE),
  upload.single("image"),
  _idRequired,
  _idExist,
  imageRequired,
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
  postImageRequestValidations,
  putRequestValidations,
  getRequestByIdValidations,
  deleteRequestValidations,
  getAllRequestValidations,
}; 