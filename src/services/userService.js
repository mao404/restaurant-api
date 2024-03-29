const UserRepository = require("../repositories/userRepository");
const repository = new UserRepository();

const findAll = async (filter, options) => {
  return await repository.findAll(filter, options);
};

const findById = async (id) => {
  return await repository.findById(id);
};

const findByEmail = async (email) => {
  return await repository.findByEmail(email);
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
  findByEmail,
  findByIdNumber,
  save,
  update,
  remove,
};
