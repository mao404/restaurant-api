import { where } from "sequelize";
import Restaurant from "../models/restaurant";

interface RestaurantData {
  name: string;
  capacity: number;
  logo?: string;
  rif: string;
  address: string;
}

class RestaurantRepository {
  constructor() {}

  async findAll() {
    return await Restaurant.findAll();
  }

  async findById(id: number) {
    return await Restaurant.findByPk(id);
  }

  async findByName(name: string) {
    return await Restaurant.findOne({ where: { name } });
  }

  async create(restaurant: RestaurantData) {
    return await Restaurant.create(restaurant);
  }

  async update(id: number, restaurant: Partial<RestaurantData>) {
    return await Restaurant.update(restaurant, { where: { id: id } });
  }

  async remove(id: number) {
    return await Restaurant.destroy({ where: { id: id } });
  }
}

export default RestaurantRepository; 