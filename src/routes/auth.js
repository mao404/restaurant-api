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
  postForgotPasswordValidations,
  postResetPasswordValidations,
} = require("../middlewares/auth");

const router = Router();

router.post("/login", postLoginRequestValidations, login);
router.post("/register", postRegisterRequestValidations, register);
router.post("/forgot-password", postForgotPasswordValidations, forgotPassword);
router.post("/reset-password", postResetPasswordValidations, resetPassword);

module.exports = router;
