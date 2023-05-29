const { Router } = require("express");
const multer = require("multer");
const upload = multer();
const {
  findAll,
  getById,
  createRestaurant,
  updateRestaurant,
  uploadResLogo,
} = require("../controllers/restaurant");

const {
  postRequestValidations,
  putRequestValidations,
  getRequestByIdValidations,
  getAllRequestValidations,
} = require("../middlewares/restaurant");

const router = Router();

router.get("/", getAllRequestValidations, findAll);
router.get("/:id(\\d+)/", getRequestByIdValidations, getById);
router.post("/", postRequestValidations, createRestaurant);
router.put("/:id(\\d+)/", putRequestValidations, updateRestaurant);
router.post("/logo", upload.single("logo"), uploadResLogo);

module.exports = router;
