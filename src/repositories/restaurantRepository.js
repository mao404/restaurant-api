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

  async create(restaurant) {
    return await Restaurant.create(restaurant);
  }

  async update(id, restaurant) {
    return await Restaurant.update(restaurant, { where: { id: id } });
  }
}

module.exports = RestaurantRepository;
