const { Router } = require("express");
const {
  createCustomer,
  updateCustomer,
  getById,
  deleteCustomer,
} = require("../controllers/customers");

const router = Router();

router.get("/");
router.get("/:id", getById);
router.post("/", createCustomer);
router.put("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);

module.exports = router;
