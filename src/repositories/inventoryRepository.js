const { where } = require("sequelize");
const Inventory = require("../models/inventory");

class InventoryRepository {
  constructor() {}

  async findAll() {
    return await Inventory.findAll();
  }

  async findById(id) {
    return await Inventory.findByPk(id);
  }

  async findByTitle(title) {
    return await Inventory.findOne({ where: { title: title } });
  }

  async create(inventory) {
    return await Inventory.create(inventory);
  }

  async update(id, inventory) {
    return await Inventory.update(inventory, { where: { id: id } });
  }

  async remove(id) {
    return await Inventory.destroy({ where: { id: id } });
  }
}

module.exports = InventoryRepository;
