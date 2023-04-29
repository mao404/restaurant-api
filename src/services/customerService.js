const CustomerRepository = require("../repositories/customerRepository");
const repository = new CustomerRepository();

const findAll = async () => {
  return await repository.findAll();
};

const findById = async (id) => {
  return await repository.findById(id);
};

const findByIdNumber = async (idNumber) => {
  return await repository.findByIdNumber(idNumber);
};

const save = async (customer) => {
  return await repository.create(customer);
};

const update = async (id, customer) => {
  return await repository.update(id, customer);
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
