const { Router } = require("express");
const multer = require("multer");
const upload = multer();
const {
  findAll,
  getById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  uploadResLogo,
} = require("../controllers/restaurant");

const {
  postRequestValidations,
  postImageRequestValidations,
  putRequestValidations,
  getRequestByIdValidations,
  getAllRequestValidations,
  deleteRequestValidations,
} = require("../middlewares/restaurant");

const router = Router();

router.get("/", getAllRequestValidations, findAll);
router.get("/:id(\\d+)/", getRequestByIdValidations, getById);
router.post("/", postRequestValidations, createRestaurant);
router.put("/:id(\\d+)/", putRequestValidations, updateRestaurant);
router.delete("/:id(\\d+)/", deleteRequestValidations, deleteRestaurant);
router.post("/logo", postImageRequestValidations, uploadResLogo);

module.exports = router;
