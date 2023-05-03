const MenuRepository = require("../repositories/menuRepository");
const repository = new MenuRepository();

const findAll = async () => {
  return await repository.findAll();
};

const findById = async (id) => {
  return await repository.findById(id);
};

const findByTitle = async (title) => {
  return await repository.findByTitle(title);
};

const save = async (menu) => {
  return await repository.create(menu);
};

const update = async (id, menu) => {
  return await repository.update(id, menu);
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
