import { Request, Response, NextFunction } from "express";
import * as orderService from "../services/orderService";
import * as orderMenuService from "../services/orderMenuService";
import { Success } from "../handlers/successHandler";
import { Logger } from "winston";
import jwt from "jsonwebtoken";
import config from "../config";

const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let order = req.body;
    order = await orderService.findAll();

    res.status(200).json(new Success(order));
  } catch (err) {
    next(err);
  }
};

const findAllDetailed = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let order = req.body;
    order = await orderMenuService.findAll();

    res.status(200).json(new Success(order));
  } catch (err) {
    next(err);
  }
};

const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let { id } = req.params;
    const inventory = await orderService.findById(Number(id));
    res.json(new Success(inventory));
  } catch (err) {
    next(err);
  }
};

const getByIdDetailed = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let { id } = req.params;
    console.log(id);
    let order = req.body;
    order = await orderMenuService.findByOrderId(Number(id));

    res.status(200).json(new Success(order));
  } catch (err) {
    next(err);
  }
};

const getByUserId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let { UserId } = req.params;
    const order = await orderService.findByUserId(Number(UserId));
    res.json(new Success(order));
  } catch (err) {
    next(err);
  }
};

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    //REFACTOR AT FUTURE
    const token = req.header("Authorization");
    if (!token) {
      throw new Error("Authorization token required");
    }
    
    const obj = jwt.verify(token, config.auth.secret || "") as any;
    let order = req.body;
    let orderMenu = req.body;
    order.UserId = obj.id;
    order = await orderService.save(order);
    let orders = orderMenu.orders;
    const putOrderId = orders
      .flat()
      .map((p: any) => Object.assign(p, { OrderId: order.id }));
    orderMenu = await orderMenuService.save(putOrderId);
    res.status(201).json(new Success(orderMenu));
  } catch (err) {
    next(err);
  }
};

const updateOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    let orders = req.body.orders;
    const putOrderId = orders
      .flat()
      .map((p: any) => Object.assign(p, { OrderId: Number(id) }));
    const orderUpdated = await orderMenuService.update(Number(id), orders);
    res.json(new Success(orderUpdated));
  } catch (err) {
    next(err);
  }
};

const updateOrderDetailed = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    let order = req.body;

    const orderUpdated = await orderMenuService.update(Number(id), order);

    res.json(new Success(orderUpdated));
  } catch (err) {
    next(err);
  }
};

const deleteOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    console.log(id);
    const order = await orderService.remove(Number(id));
    res.json(new Success(order));
  } catch (err) {
    next(err);
  }
};

export {
  findAll,
  findAllDetailed,
  getById,
  getByIdDetailed,
  getByUserId,
  createOrder,
  updateOrder,
  updateOrderDetailed,
  deleteOrder,
}; 