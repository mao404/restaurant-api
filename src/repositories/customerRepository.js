const { where } = require("sequelize");
const Customer = require("../models/customer");

class CustomerRepository {
  constructor() {}

  async findAll() {
    return await Customer.findAll();
  }

  async findById(id) {
    return await Customer.findByPk(id);
  }

  async findByIdNumber(idNumber) {
    return await Customer.findOne({ where: { idNumber: idNumber } });
  }

  async create(customer) {
    return await Customer.create(customer);
  }

  async update(id, customer) {
    return await Customer.update(customer, { where: { id: id } });
  }

  async remove(id) {
    return await Customer.destroy({ where: { id: id } });
  }
}

module.exports = CustomerRepository;
