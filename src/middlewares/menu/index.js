const { check } = require("express-validator");
const multer = require("multer");
const upload = multer();
const AppError = require("../../errors/appError");
const menuService = require("../../services/menuService");
const { validationResult, imageRequired } = require("../common");
const { ADMIN_ROLE } = require("../../constants/index");
const { validJWT, hasRole } = require("../auth");

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
  const menuFound = await menuService.findById(id);
  if (!menuFound) {
    throw new AppError("The ID does not exist in DB", 400);
  }
});

const postRequestValidations = [
  validJWT,
  hasRole(ADMIN_ROLE),
  _titleRequired,
  _descriptionRequired,
  _priceRequired,
  _menuExist,
  validationResult,
];

const postImageRequestValidations = [
  validJWT,
  hasRole(ADMIN_ROLE),
  upload.single("image"),
  _idRequired,
  _idExist,
  imageRequired,
  validationResult,
];

const putRequestValidations = [
  validJWT,
  hasRole(ADMIN_ROLE),
  _idRequired,
  _idExist,
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
  postImageRequestValidations,
  putRequestValidations,
  getRequestByIdValidations,
  deleteRequestValidations,
  getAllRequestValidations,
};
