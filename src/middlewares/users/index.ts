import { check, ValidationChain } from "express-validator";
import { RequestHandler } from "express";
import { AppError } from "../../errors/appError";
import * as userService from "../../services/userService";
import { validationResult, userRegisterValidations } from "../common";
import { ROLES, ADMIN_ROLE } from "../../constants/index";
import { validJWT, hasRole } from "../auth/";

const _idRequired = check("id", "ID is required").not().isEmpty();
const _idExist = check("id").custom(async (id = "") => {
  const userFound = await userService.findById(Number(id));
  if (!userFound) {
    throw new AppError("The ID does not exist in DB", 400);
  }
});

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
    if (!ROLES.includes(role as any)) {
      throw new AppError("Invalid role", 400);
    }
  });

const postRequestValidations: RequestHandler[] = [
  validJWT,
  hasRole(ADMIN_ROLE),
  ...userRegisterValidations,
  _roleValid,
  validationResult,
];

const putRequestValidations: RequestHandler[] = [
  validJWT,
  hasRole(ADMIN_ROLE),
  _idRequired,
  _idExist,
  _optionalEmailValid,
  _optionalEmailExist,
  _roleValid,
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
  putRequestValidations,
  getRequestByIdValidations,
  deleteRequestValidations,
  getAllRequestValidations,
}; 