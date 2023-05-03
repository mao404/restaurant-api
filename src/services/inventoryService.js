const InventoryRepository = require("../repositories/inventoryRepository");
const repository = new InventoryRepository();

const findAll = async () => {
  return await repository.findAll();
};

const findById = async (id) => {
  return await repository.findById(id);
};

const findByTitle = async (title) => {
  return await repository.findByTitle(title);
};

const save = async (inventory) => {
  return await repository.create(inventory);
};

const update = async (id, inventory) => {
  return await repository.update(id, inventory);
};

const remove = async (id) => {
  return await repository.remove(id);
};

module.exports = {
  findAll,
  findById,
  findByTitle,
  save,
  update,
  remove,
};
