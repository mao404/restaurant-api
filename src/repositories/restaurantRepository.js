const { where } = require("sequelize");
const Restaurant = require("../models/restaurant");

class RestaurantRepository {
  constructor() {}

  async findAll() {
    return await Restaurant.findAll();
  }

  async findById(id) {
    return await Restaurant.findByPk(id);
  }

  async findByName(name) {
    return await Restaurant.findOne({ where: { name } });
  }

  async create(restaurant) {
    return await Restaurant.create(restaurant);
  }

  async update(id, restaurant) {
    return await Restaurant.update(restaurant, { where: { id: id } });
  }

  async remove(id) {
    return await Restaurant.destroy({ where: { id: id } });
  }
}

module.exports = RestaurantRepository;
