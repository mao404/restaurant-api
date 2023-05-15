const Order = require("../models/order");

class OrderRepository {
  constructor() {}

  async findAll() {
    return await Order.findAll();
  }

  async findById(id) {
    return await Order.findByPk(id);
  }

  async findByUserId(UserId) {
    return await Order.findOne({ where: { UserId } });
  }

  async create(order) {
    return await Order.create(order);
  }

  async update(id, order) {
    return await Order.update(order, { where: { id } });
  }

  async remove(id) {
    return await Order.destroy({ where: { id } });
  }
}

module.exports = OrderRepository;
