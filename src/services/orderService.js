const OrderRepository = require("../repositories/orderRepository");
const repository = new OrderRepository();

const findAll = async () => {
  return await repository.findAll();
};

const findById = async (id) => {
  return await repository.findById(id);
};

const findByUserId = async (UserId) => {
  return await repository.findByUserId(UserId);
};

const save = async (order) => {
  return await repository.create(order);
};

const update = async (id, order) => {
  return await repository.update(id, order);
};

const remove = async (id) => {
  return await repository.remove(id);
};

module.exports = {
  findAll,
  findById,
  findByUserId,
  save,
  update,
  remove,
};
