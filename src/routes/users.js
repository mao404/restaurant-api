const { Router } = require("express");
const {
    findAll,
    getById,
    getByIdNumber,
    createUser,
    updateUser,
    deleteUser,
} = require("../controllers/users");

const {
  postRequestValidations,
  putRequestValidations,
  getRequestByIdValidations,
  deleteRequestValidations,
} = require("../middlewares/users");

const router = Router();

router.get("/", findAll);
router.get("/:id(\\d+)/", getRequestByIdValidations, getById);
router.post("/", postRequestValidations, createUser);
router.put("/:id(\\d+)/", putRequestValidations, updateUser);
router.delete("/:id(\\d+)/", deleteRequestValidations, deleteUser);

module.exports = router;
