import { Request, Response, NextFunction } from "express";
import * as userService from "../services/userService";
import { Success } from "../handlers/successHandler";
import logger from "../loaders/logger";

const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    logger.info("Query: " + JSON.stringify(req.query));

    const { filter = "", options = "" } = req.query;

    const users = await userService.findAll(filter as any, options as any);

    res.status(200).json(new Success(users));
  } catch (err) {
    next(err);
  }
};

const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let { id } = req.params;
    const users = await userService.findById(Number(id));
    res.json(new Success(users));
  } catch (err) {
    next(err);
  }
};

const getByIdNumber = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let { cedula } = req.params;
    const users = await userService.findByIdNumber(Number(cedula));
    res.json(new Success(users));
  } catch (err) {
    next(err);
  }
};

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let users = req.body;
    users = await userService.save(users);

    res.status(201).json(new Success(users));
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    let users = req.body;

    const userUpdated = await userService.update(Number(id), users);

    res.json(new Success(userUpdated));
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const users = await userService.remove(Number(id));
    res.json(new Success(users));
  } catch (err) {
    next(err);
  }
};

export {
  findAll,
  getById,
  getByIdNumber,
  createUser,
  updateUser,
  deleteUser,
}; 