const express = require("express");
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

module.exports = {
  login,
  register,
};
