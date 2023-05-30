const RestaurantRepository = require("../repositories/restaurantRepository");
const repository = new RestaurantRepository();
const ImageRepository = require("../repositories/imageRepository");
const imageRepository = new ImageRepository();

const findAll = async () => {
  return await repository.findAll();
};

const findById = async (id) => {
  return await repository.findById(id);
};

const findByName = async (name) => {
  return await repository.findByName(name);
};

const save = async (restaurant) => {
  return await repository.create(restaurant);
};

const update = async (id, restaurant) => {
  return await repository.update(id, restaurant);
};

const remove = async (id) => {
  const restaurant = await repository.findById(id);
  if (restaurant.logo) {
    imageRepository.deleteImage(restaurant.logo);
  }
  return await repository.remove(id);
};

module.exports = {
  findAll,
  findById,
  findByName,
  save,
  update,
  remove,
};
