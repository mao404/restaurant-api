const orderService = require("../services/orderService");
const orderMenuService = require("../services/orderMenuService");
const Success = require("../handlers/successHandler");
const { Logger } = require("winston");
const jwt = require("jsonwebtoken");
const config = require("../config");

const findAll = async (req, res, next) => {
  try {
    let order = req.body;
    order = await orderService.findAll(order);

    res.status(200).json(new Success(order));
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    let { id } = req.params;
    inventory = await orderService.findById(id);
    res.json(new Success(inventory));
  } catch (err) {
    next(err);
  }
};

const getByUserId = async (req, res, next) => {
  try {
    let { UserId } = req.params;
    order = await orderService.findByUserId(UserId);
    res.json(new Success(order));
  } catch (err) {
    next(err);
  }
};

const createOrder = async (req, res, next) => {
  try {
    //REFACTOR AT FUTURE
    token = req.header("Authorization");
    const obj = jwt.verify(token, config.auth.secret);
    let order = req.body;
    let orderMenu = req.body;
    order.UserId = obj.id;
    order = await orderService.save(order);
    let orders = orderMenu.orders;
    const putOrderId = orders
      .flat()
      .map((p) => Object.assign(p, { OrderId: order.id }));
    orderMenu = await orderMenuService.save(putOrderId);
    res.status(201).json(new Success(orderMenu));
  } catch (err) {
    next(err);
  }
};

const updateOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    let order = req.body;

    const orderUpdated = await orderService.update(id, order);

    res.json(new Success(orderUpdated));
  } catch (err) {
    next(err);
  }
};

const deleteOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const order = await orderService.remove(id);
    res.json(new Success(order));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  findAll,
  getById,
  getByUserId,
  createOrder,
  updateOrder,
  deleteOrder,
};
