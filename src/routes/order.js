const { Router } = require("express");
const {
  findAll,
  getById,
  getByUserId,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/order");

//const {} = require("../middlewares/users");

const router = Router();

router.get("/", findAll);
router.get("/:id(\\d+)/", getById);
router.post("/", createOrder);
router.put("/:id(\\d+)/", updateOrder);
router.delete("/:id(\\d+)/", deleteOrder);

module.exports = router;
