const { Op } = require("sequelize");
const OrderMenu = require("../models/orderMenu");

class OrderMenuRepository {
  constructor() {}

  async findAll() {
    return await OrderMenu.findAll();
  }

  async findById(id) {
    return await OrderMenu.findByPk(id);
  }

  async findByUserId(UserId) {
    return await OrderMenu.findOne({ where: { UserId } });
  }

  async findByOrderId(OrderId) {
    return await OrderMenu.findAll({ where: { OrderId } });
  }

  async create(orderMenu) {
    return await OrderMenu.bulkCreate(orderMenu);
  }

  //TO FIX
  async update(OrderId, order) {
    return await OrderMenu.bulkCreate(order, {
      where: { OrderId },
      updateOnDuplicate: ["comment", "quantity"],
    });
  }
}

module.exports = OrderMenuRepository;
