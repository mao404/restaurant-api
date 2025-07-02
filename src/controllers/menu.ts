import { Request, Response, NextFunction } from "express";
import * as menuService from "../services/menuService";
import * as imageService from "../services/imageService";
import { Success } from "../handlers/successHandler";
import logger from "../loaders/logger/";

const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let menu = req.body;
    menu = await menuService.findAll();

    res.status(200).json(new Success(menu));
  } catch (err) {
    next(err);
  }
};

const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let { id } = req.params;
    const menu = await menuService.findById(Number(id));
    res.json(new Success(menu));
  } catch (err) {
    next(err);
  }
};

const getByTitle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let { title } = req.params;
    const menu = await menuService.findByTitle(title);
    res.json(new Success(menu));
  } catch (err) {
    next(err);
  }
};

const createMenu = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let menu = req.body;
    menu = await menuService.save(menu);

    res.status(201).json(new Success(menu));
  } catch (err) {
    next(err);
  }
};

const updateMenu = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    let menu = req.body;

    const menuUpdated = await menuService.update(Number(id), menu);

    res.json(new Success(menuUpdated));
  } catch (err) {
    next(err);
  }
};

const deleteMenu = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const menu = await menuService.remove(Number(id));
    res.json(new Success(menu));
  } catch (err) {
    next(err);
  }
};

const uploadMenuImage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const menuId = req.body.id;
    const image = req.file;

    if (!image) {
      throw new Error("No image file provided");
    }

    res.json(new Success(await imageService.uploadMenuImage(Number(menuId), image)));
  } catch (err) {
    next(err);
  }
};

export {
  findAll,
  getById,
  getByTitle,
  createMenu,
  updateMenu,
  deleteMenu,
  uploadMenuImage,
}; 