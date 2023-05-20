const Menu = require("../models/menu");
const Order = require("../models/order");

class OrderRepository {
  constructor() {}

  async findAll() {
    let config = {
      attributes: ["id", "totalPrice", "createdAt", "UserId"],
      include: [
        {
          attributes: ["id", "title", "description", "price"],
          model: Menu,
          through: {
            attributes: ["quantity", "comment"],
          },
        },
      ],
    };

    return await Order.findAll(config);
  }

  async findById(id) {
    let config = {
      attributes: ["id", "totalPrice", "createdAt", "UserId"],
      include: {
        model: Menu,
        attributes: ["id", "title", "description", "price", "image"],
        through: {
          attributes: ["quantity", "comment", "MenuId"],
        },
      },
    };

    return await Order.findByPk(id, config);
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
