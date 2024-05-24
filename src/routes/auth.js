const { Router } = require("express");
const {
  login,
  register,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth");
const {
  postLoginRequestValidations,
  postRegisterRequestValidations,
} = require("../middlewares/auth");

const router = Router();

router.post("/login", postLoginRequestValidations, login);
router.post("/register", postRegisterRequestValidations, register);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

module.exports = router;
