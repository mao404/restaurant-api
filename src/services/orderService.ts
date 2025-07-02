import OrderRepository from "../repositories/orderRepository";
const repository = new OrderRepository();

interface OrderData {
  totalPrice?: number;
  UserId?: number;
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

const save = async (order: OrderData) => {
  return await repository.create(order);
};

const update = async (id: number, order: Partial<OrderData>) => {
  return await repository.update(id, order);
};

const remove = async (id: number) => {
  return await repository.remove(id);
};

export {
  findAll,
  findById,
  findByUserId,
  save,
  update,
  remove,
}; 