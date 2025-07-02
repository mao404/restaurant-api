import { check } from "express-validator";
import { AppError } from "../../errors/appError";
import { validationResult, userRegisterValidations } from "../common";
import { validToken, validRole } from "../../services/authService";
import { Request, Response, NextFunction } from "express";
import { UserRole } from "../../constants";

const _emailRequired = check("email", "Email required").not().isEmpty();
const _emailValid = check("email", "Email is invalid").isEmail();
const _passwordRequired = check("password", "Password required")
  .not()
  .isEmpty();

const _passwordLength = check("password").custom(async (password = "") => {
  if (password.length < 8) {
    throw new AppError("The password must be longer than 8 characters");
  }
});

const _requiredCharacters = check("password").custom(async (password = "") => {
  const pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[.+#,^]).+$/;

  if (!pattern.test(password)) {
    throw new AppError(
      "Password must have at least one uppercase letter, one number, and one of the following symbols: . + # , ^"
    );
  }
});

const _tokenRequired = check("token", "Token is required").not().isEmpty();
const _idRequired = check("id", "ID is required").not().isEmpty();

const validJWT = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header("Authorization");
    const user = await validToken(token || "");
    (req as any).user = user;
    next();
  } catch (err) {
    next(err);
  }
};

const hasRole = (...roles: UserRole[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      validRole((req as any).user, ...roles);
      next();
    } catch (err) {
      next(err);
    }
  };
};

const _rolePresent = check("role")
  .optional()
  .custom(async (role = "") => {
    if (role) {
      throw new AppError("Invalid role parameter", 400);
    }
  });

const postLoginRequestValidations = [
  _emailRequired,
  _emailValid,
  _passwordRequired,
  validationResult,
];

const postRegisterRequestValidations = [
  ...userRegisterValidations,
  _rolePresent,
  validationResult,
];

const postForgotPasswordValidations = [
  _emailRequired,
  _emailValid,
  validationResult,
];

const postResetPasswordValidations = [
  _passwordRequired,
  _passwordLength,
  _requiredCharacters,
  _tokenRequired,
  _idRequired,
  validationResult,
];

export {
  postLoginRequestValidations,
  postRegisterRequestValidations,
  postForgotPasswordValidations,
  postResetPasswordValidations,
  validJWT,
  hasRole,
}; 