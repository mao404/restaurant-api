const { check } = require("express-validator");
const AppError = require("../../errors/appError");
const inventoryService = require("../../services/inventoryService");
const { validationResult } = require("../common");
const { ADMIN_ROLE } = require("../../constants/index");
const { validJWT, hasRole } = require("../auth");

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
  const itemFound = await inventoryService.findById(id);
  if (!itemFound) {
    throw new AppError("The ID does not exist in DB", 400);
  }
});

const postRequestValidations = [
  validJWT,
  _titleRequired,
  _unitRequired,
  _quantityRequired,
  _itemExist,
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
