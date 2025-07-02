import Menu from "../models/menu";
import Order from "../models/order";

interface OrderData {
  totalPrice?: number;
  UserId?: number;
}

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

  async findById(id: number) {
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

  async findByUserId(UserId: number) {
    return await Order.findOne({ where: { UserId } });
  }

  async create(order: OrderData) {
    return await Order.create(order);
  }

  async update(id: number, order: Partial<OrderData>) {
    return await Order.update(order, { where: { id } });
  }

  async remove(id: number) {
    return await Order.destroy({ where: { id } });
  }
}

export default OrderRepository; 