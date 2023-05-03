const { Router } = require("express");
const {
  findAll,
  getById,
  getByTitle,
  createInventory,
  updateInventory,
  deleteInventory,
} = require("../controllers/inventory");

const {
  postRequestValidations,
  putRequestValidations,
  getRequestByIdValidations,
  deleteRequestValidations,
} = require("../middlewares/inventory");

const router = Router();

router.get("/", findAll);
router.get("/:id(\\d+)/", getRequestByIdValidations, getById);
router.post("/", postRequestValidations, createInventory);
router.put("/:id(\\d+)/", putRequestValidations, updateInventory);
router.delete("/:id(\\d+)/", deleteRequestValidations, deleteInventory);

module.exports = router;
