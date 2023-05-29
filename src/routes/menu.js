const { Router } = require("express");
const multer = require("multer");
const upload = multer();
const {
  findAll,
  getById,
  getByTitle,
  createMenu,
  updateMenu,
  deleteMenu,
  uploadMenuImage,
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
router.post("/image", upload.single("image"), uploadMenuImage);

module.exports = router;
