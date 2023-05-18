const { Router } = require("express");
const {
  findAll,
  getById,
  createRestaurant,
  updateRestaurant,
} = require("../controllers/restaurant");

const {
  postRequestValidations,
  putRequestValidations,
  getRequestByIdValidations,
} = require("../middlewares/restaurant");

const router = Router();

router.get("/", findAll);
router.get("/:id(\\d+)/", getRequestByIdValidations, getById);
router.post("/", postRequestValidations, createRestaurant);
router.put("/:id(\\d+)/", putRequestValidations, updateRestaurant);

module.exports = router;