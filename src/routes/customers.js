const { Router } = require("express");
const {
  findAll,
  getById,
  getByIdNumber,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customers");

const router = Router();

router.get("/", findAll);
router.get("/:id", getById);
router.post("/", createCustomer);
router.put("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);

module.exports = router;
