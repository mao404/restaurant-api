const authService = require("../services/authService");
const Success = require("../handlers/successHandler");
const { request, response } = require("express");

//To add comments
const login = async (req = request, res = response, next) => {
  const { email, password } = req.body;
  try {
    res.json(new Success(await authService.login(email, password)));
  } catch (err) {
    next(err);
  }
};

const register = async (req = request, res = response, next) => {
  const user = req.body;
  try {
    res.status(201).json(new Success(await authService.register(user)));
  } catch (err) {
    next(err);
  }
};

const forgotPassword = async (req = request, res = response, next) => {
  const { email } = req.body;
  try {
    res
      .status(200)
      .json(new Success(await authService.requestForgotPassword(email)));
  } catch (err) {
    next(err);
  }
};

const resetPassword = async (req, res, next) => {
  const { id, token } = req.query;
  const { password } = req.body;

  try {
    res
      .status(200)
      .json(new Success(await authService.resetPassword(id, token, password)));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
  register,
  forgotPassword,
  resetPassword,
};
