import { check } from "express-validator";
import { RequestHandler } from "express";
import multer from "multer";
const upload = multer();
import { AppError } from "../../errors/appError";
import * as menuService from "../../services/menuService";
import { validationResult, imageRequired } from "../common";
import { ADMIN_ROLE } from "../../constants/index";
import { validJWT, hasRole } from "../auth";

const _titleRequired = check("title", "Title required").not().isEmpty();
const _descriptionRequired = check("description", "Description required")
  .not()
  .isEmpty();
const _priceRequired = check("price", "Price required").not().isEmpty();
const _menuExist = check("title").custom(async (title = "") => {
  const menuFound = await menuService.findByTitle(title);
  if (menuFound) {
    throw new AppError("Menu already exist in DB", 400);
  }
});

const _idRequired = check("id", "ID is required").not().isEmpty();
const _idExist = check("id").custom(async (id = "") => {
  const menuFound = await menuService.findById(Number(id));
  if (!menuFound) {
    throw new AppError("The ID does not exist in DB", 400);
  }
});

const postRequestValidations: RequestHandler[] = [
  validJWT,
  hasRole(ADMIN_ROLE),
  _titleRequired,
  _descriptionRequired,
  _priceRequired,
  _menuExist,
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

const getAllRequestValidations: RequestHandler[] = [validJWT];

export {
  postRequestValidations,
  postImageRequestValidations,
  putRequestValidations,
  getRequestByIdValidations,
  deleteRequestValidations,
  getAllRequestValidations,
}; 