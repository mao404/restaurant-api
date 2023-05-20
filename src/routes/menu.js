const { Router } = require("express");
const {
  findAll,
  getById,
  getByTitle,
  createMenu,
  updateMenu,
  deleteMenu,
} = require("../controllers/menu");

const {
  postRequestValidations,
  putRequestValidations,
  getRequestByIdValidations,
  deleteRequestValidations,
  getAllRequestValidations,
} = require("../middlewares/menu");

const router = Router();

router.get("/", getAllRequestValidations, findAll);
router.get("/:id(\\d+)/", getRequestByIdValidations, getById);
router.post("/", postRequestValidations, createMenu);
router.put("/:id(\\d+)/", putRequestValidations, updateMenu);
router.delete("/:id(\\d+)/", deleteRequestValidations, deleteMenu);

module.exports = router;
