const { Router } = require("express");
const {
  findAll,
  findAllDetailed,
  getById,
  getByIdDetailed,
  getByUserId,
  createOrder,
  updateOrder,
  updateOrderDetailed,
  deleteOrder,
} = require("../controllers/order");

const {
  postRequestValidations,
  putRequestValidations,
  getRequestByIdValidations,
  deleteRequestValidations,
  getAllRequestValidations,
} = require("../middlewares/order");

const router = Router();

router.get("/", getAllRequestValidations, findAll);
router.get("/details", findAllDetailed);
router.get("/:id(\\d+)/", getRequestByIdValidations, getById);
router.get("/details/:id", getByIdDetailed);
router.post("/", postRequestValidations, createOrder);
router.put("/:id(\\d+)/", updateOrder);
router.put("/details/:id", updateOrderDetailed);
router.delete("/:id(\\d+)/", deleteRequestValidations, deleteOrder);

module.exports = router;
