const { check } = require("express-validator");
const AppError = require("../../errors/appError");
const { validationResult, userRegisterValidations } = require("../common");
const { validToken, validRole } = require("../../services/authService");

const _emailRequired = check("email", "Email required").not().isEmpty();
const _emailValid = check("email", "Email is invalid").isEmail();
const _passwordRequired = check("password", "Password required")
  .not()
  .isEmpty();

const validJWT = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    const user = await validToken(token);
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

const hasRole = (...roles) => {
  return (req, res, next) => {
    try {
      validRole(req.user, ...roles);
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
  userRegisterValidations,
  _rolePresent,
  validationResult,
];

module.exports = {
  postLoginRequestValidations,
  postRegisterRequestValidations,
  validJWT,
  hasRole,
};
