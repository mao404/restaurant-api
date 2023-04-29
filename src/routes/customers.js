const { Router } = require("express");
const {
  findAll,
  getById,
  getByIdNumber,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customers");

const {
  postRequestValidations,
  putRequestValidations,
  getRequestByIdValidations,
  deleteRequestValidations,
} = require('../middlewares/customers/')

const router = Router();

router.get("/", findAll);
router.get("/:id(\\d+)/", getRequestByIdValidations, getById);
router.post("/", postRequestValidations, createCustomer);
router.put("/:id(\\d+)/", putRequestValidations, updateCustomer);
router.delete("/:id(\\d+)/", deleteRequestValidations, deleteCustomer);

module.exports = router;
