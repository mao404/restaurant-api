const { where } = require("sequelize");
const Menu = require("../models/menu");

class MenuRepository {
  constructor() {}

  async findAll() {
    return await Menu.findAll();
  }

  async findById(id) {
    return await Menu.findByPk(id);
  }

  async findByTitle(title) {
    return await Menu.findOne({ where: { title: title } });
  }

  async create(menu) {
    return await Menu.create(menu);
  }

  async update(id, menu) {
    return await Menu.update(menu, { where: { id: id } });
  }

  async remove(id) {
    return await Menu.destroy({ where: { id: id } });
  }
}

module.exports = MenuRepository;
