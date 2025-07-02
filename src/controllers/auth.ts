import { Request, Response, NextFunction } from "express";
import * as authService from "../services/authService";
import { Success } from "../handlers/successHandler";

//To add comments
const login = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  try {
    res.json(new Success(await authService.login(email, password)));
  } catch (err) {
    next(err);
  }
};

const register = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;
  try {
    res.status(201).json(new Success(await authService.register(user)));
  } catch (err) {
    next(err);
  }
};

const forgotPassword = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  try {
    res
      .status(200)
      .json(new Success(await authService.requestForgotPassword(email)));
  } catch (err) {
    next(err);
  }
};

const resetPassword = async (req: Request, res: Response, next: NextFunction) => {
  const { id, token } = req.query;
  const { password } = req.body;

  try {
    res
      .status(200)
      .json(new Success(await authService.resetPassword(Number(id), String(token), password)));
  } catch (err) {
    next(err);
  }
};

export {
  login,
  register,
  forgotPassword,
  resetPassword,
}; 