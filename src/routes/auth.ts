import { Router } from "express";
import {
  login,
  register,
  forgotPassword,
  resetPassword,
} from "../controllers/auth";
import {
  postLoginRequestValidations,
  postRegisterRequestValidations,
  postForgotPasswordValidations,
  postResetPasswordValidations,
} from "../middlewares/auth";

const router = Router();

router.post("/login", postLoginRequestValidations, login);
router.post("/register", postRegisterRequestValidations, register);
router.post("/forgot-password", postForgotPasswordValidations, forgotPassword);
router.post("/reset-password", postResetPasswordValidations, resetPassword);

export default router; 