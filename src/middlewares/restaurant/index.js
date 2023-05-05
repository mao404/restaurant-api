const { check } = require("express-validator");
const AppError = require("../../errors/appError");
const restaurantService = require("../../services/restaurantService");
const { validationResult } = require("../common");

const _nameRequired = check("name", "Name required").not().isEmpty();
const _capacityRequired = check("capacity", "Capacity required")
  .not()
  .isEmpty();
const _rifRequired = check("rif", "RIF required").not().isEmpty();
const _addressRequired = check("address", "Address required").not().isEmpty();
const _restExist = check("id").custom(async (id = "1") => {
  const itemFound = await restaurantService.findById(id);
  if (itemFound) {
    throw new AppError("Restaurant listed in DB", 400);
  }
});

const _idRequired = check("id", "ID is required").not().isEmpty();
const _idExist = check("id").custom(async (id = "") => {
  const itemFound = await restaurantService.findById(id);
  if (!itemFound) {
    throw new AppError("The ID does not exist in DB", 400);
  }
});

const postRequestValidations = [
  _nameRequired,
  _capacityRequired,
  _rifRequired,
  _addressRequired,
  _restExist,
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
