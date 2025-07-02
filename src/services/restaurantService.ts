import RestaurantRepository from "../repositories/restaurantRepository";
const repository = new RestaurantRepository();
import ImageRepository from "../repositories/imageRepository";
const imageRepository = new ImageRepository();

interface RestaurantData {
  name: string;
  capacity: number;
  logo?: string;
  rif: string;
  address: string;
}

const findAll = async () => {
  return await repository.findAll();
};

const findById = async (id: number) => {
  return await repository.findById(id);
};

const findByName = async (name: string) => {
  return await repository.findByName(name);
};

const save = async (restaurant: RestaurantData) => {
  return await repository.create(restaurant);
};

const update = async (id: number, restaurant: Partial<RestaurantData>) => {
  return await repository.update(id, restaurant);
};

const remove = async (id: number) => {
  const restaurant = await repository.findById(id);
  if (restaurant && restaurant.logo) {
    imageRepository.deleteImage(restaurant.logo);
  }
  return await repository.remove(id);
};

export {
  findAll,
  findById,
  findByName,
  save,
  update,
  remove,
}; 