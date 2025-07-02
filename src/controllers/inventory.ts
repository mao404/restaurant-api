import { Request, Response, NextFunction } from "express";
import * as inventoryService from "../services/inventoryService";
import { Success } from "../handlers/successHandler";
import { Logger } from "winston";

const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let inventory = req.body;
    inventory = await inventoryService.findAll();

    res.status(200).json(new Success(inventory));
  } catch (err) {
    next(err);
  }
};

const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let { id } = req.params;
    const inventory = await inventoryService.findById(Number(id));
    res.json(new Success(inventory));
  } catch (err) {
    next(err);
  }
};

const getByTitle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let { title } = req.params;
    const inventory = await inventoryService.findByTitle(title);
    res.json(new Success(inventory));
  } catch (err) {
    next(err);
  }
};

const createInventory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let inventory = req.body;
    inventory = await inventoryService.save(inventory);

    res.status(201).json(new Success(inventory));
  } catch (err) {
    next(err);
  }
};

const updateInventory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    let inventory = req.body;

    const inventoryUpdated = await inventoryService.update(Number(id), inventory);

    res.json(new Success(inventoryUpdated));
  } catch (err) {
    next(err);
  }
};

const deleteInventory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const inventory = await inventoryService.remove(Number(id));
    res.json(new Success(inventory));
  } catch (err) {
    next(err);
  }
};

export {
  findAll,
  getById,
  getByTitle,
  createInventory,
  updateInventory,
  deleteInventory,
}; 