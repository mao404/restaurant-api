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

  async create(orderMenu) {
    return await OrderMenu.bulkCreate(orderMenu);
  }

  async update(id, order) {
    return await OrderMenu.update(order, { where: { id } });
  }
}

module.exports = OrderMenuRepository;
