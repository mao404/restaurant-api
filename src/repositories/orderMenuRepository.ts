import { Op } from "sequelize";
import OrderMenu from "../models/orderMenu";

interface OrderMenuData {
  quantity: number;
  comment?: string;
  OrderId?: number;
  MenuId?: number;
}

class OrderMenuRepository {
  constructor() {}

  async findAll() {
    return await OrderMenu.findAll();
  }

  async findById(id: number) {
    return await OrderMenu.findByPk(id);
  }

  async findByUserId(UserId: number) {
    // OrderMenu doesn't have UserId field, this method should be removed or implemented differently
    throw new Error("Method not implemented - OrderMenu doesn't have UserId field");
  }

  async findByOrderId(OrderId: number) {
    return await OrderMenu.findAll({ where: { OrderId } });
  }

  async create(orderMenu: OrderMenuData[]) {
    return await OrderMenu.bulkCreate(orderMenu);
  }

  //TO FIX
  async update(OrderId: number, order: OrderMenuData[]) {
    // First delete existing records for this order
    await OrderMenu.destroy({ where: { OrderId } });
    // Then create new records
    return await OrderMenu.bulkCreate(order);
  }
}

export default OrderMenuRepository; 