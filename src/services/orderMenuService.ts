import OrderMenuRepository from "../repositories/orderMenuRepository";
const repository = new OrderMenuRepository();

interface OrderMenuData {
  quantity: number;
  comment?: string;
  OrderId?: number;
  MenuId?: number;
}

const findAll = async () => {
  return await repository.findAll();
};

const findById = async (id: number) => {
  return await repository.findById(id);
};

const findByUserId = async (UserId: number) => {
  return await repository.findByUserId(UserId);
};

const findByOrderId = async (OrderId: number) => {
  return await repository.findByOrderId(OrderId);
};

const save = async (orderMenu: OrderMenuData[]) => {
  return await repository.create(orderMenu);
};

const update = async (id: number, order: OrderMenuData[]) => {
  return await repository.update(id, order);
};

export {
  findAll,
  findById,
  findByUserId,
  findByOrderId,
  save,
  update,
}; 