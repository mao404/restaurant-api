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

//const {} = require("../middlewares/users");

const router = Router();

router.get("/", findAll);
router.get("/details", findAllDetailed);
router.get("/:id(\\d+)/", getById);
router.get("/details/:id", getByIdDetailed);
router.post("/", createOrder);
router.put("/:id(\\d+)/", updateOrder);
router.put("/details/:id", updateOrderDetailed);
router.delete("/:id(\\d+)/", deleteOrder);

module.exports = router;
