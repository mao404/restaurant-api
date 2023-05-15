const OrderMenuRepository = require("../repositories/orderMenuRepository");
const repository = new OrderMenuRepository();

const findAll = async () => {
  return await repository.findAll();
};

const findById = async (id) => {
  return await repository.findById(id);
};

const findByUserId = async (UserId) => {
  return await repository.findByUserId(UserId);
};

const save = async (orderMenu) => {
  return await repository.create(orderMenu);
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
