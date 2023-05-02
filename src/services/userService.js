const UserRepository = require("../repositories/userRepository");
const repository = new UserRepository();

const findAll = async () => {
  return await repository.findAll();
};

const findById = async (id) => {
  return await repository.findById(id);
};

const findByIdNumber = async (idNumber) => {
  return await repository.findByIdNumber(idNumber);
};

const save = async (user) => {
  return await repository.create(user);
};

const update = async (id, user) => {
  return await repository.update(id, user);
};

const remove = async (id) => {
  return await repository.remove(id);
};

module.exports = {
  findAll,
  findById,
  findByIdNumber,
  save,
  update,
  remove,
};
