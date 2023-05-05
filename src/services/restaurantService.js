const RestaurantRepository = require("../repositories/restaurantRepository");
const repository = new RestaurantRepository();

const findAll = async () => {
  return await repository.findAll();
};

const findById = async (id) => {
  return await repository.findById(id);
};

const save = async (restaurant) => {
  return await repository.create(restaurant);
};

const update = async (id, restaurant) => {
  return await repository.update(id, restaurant);
};

module.exports = {
  findAll,
  findById,
  save,
  update,
};
