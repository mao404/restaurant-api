import { Request, Response, NextFunction } from "express";
import * as restaurantService from "../services/restaurantService";
import * as imageService from "../services/imageService";
import { Success } from "../handlers/successHandler";
import { Logger } from "winston";

const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let restaurant = req.body;
    restaurant = await restaurantService.findAll();

    res.status(200).json(new Success(restaurant));
  } catch (err) {
    next(err);
  }
};

const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let { id } = req.params;
    const restaurant = await restaurantService.findById(Number(id));
    res.json(new Success(restaurant));
  } catch (err) {
    next(err);
  }
};

const createRestaurant = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let restaurant = req.body;
    restaurant = await restaurantService.save(restaurant);

    res.status(201).json(new Success(restaurant));
  } catch (err) {
    next(err);
  }
};

const updateRestaurant = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    let restaurant = req.body;

    const restaurantUpdated = await restaurantService.update(Number(id), restaurant);

    res.json(new Success(restaurantUpdated));
  } catch (err) {
    next(err);
  }
};

const deleteRestaurant = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const restaurant = await restaurantService.remove(Number(id));
    res.json(new Success(restaurant));
  } catch (err) {
    next(err);
  }
};

const uploadResLogo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const menuId = req.body.id;
    const logo = req.file;

    if (!logo) {
      throw new Error("No logo file provided");
    }

    res.json(
      new Success(await imageService.uploadRestaurantLogo(Number(menuId), logo)),
    );
  } catch (err) {
    next(err);
  }
};

export {
  findAll,
  getById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  uploadResLogo,
}; 