import ImageRepository from "../repositories/imageRepository";
const imageRepository = new ImageRepository();
import MenuRepository from "../repositories/menuRepository";
const menuRepository = new MenuRepository();
import RestaurantRepository from "../repositories/restaurantRepository";
const restaurantRepository = new RestaurantRepository();

interface FileData {
  buffer: Buffer;
  mimetype: string;
}

const uploadMenuImage = async (idMenu: number, file: FileData) => {
  const menu = await menuRepository.findById(idMenu);
  if (!menu) {
    throw new Error("Menu not found");
  }
  
  // LOGIC TO REPLACE SPACES GLOBAL(ALL) WITH "_" TO BE SAVED IN S3
  const title = menu.title.replace(/ /g, "_");

  if (menu.image) {
    await imageRepository.deleteImage(menu.image);
  }

  const imageURL = await imageRepository.uploadImage(
    title,
    file.buffer,
    file.mimetype,
  );
  menu.image = imageURL;
  return await menuRepository.update(idMenu, { image: imageURL });
};

const uploadRestaurantLogo = async (idRes: number, file: FileData) => {
  const restaurant = await restaurantRepository.findById(idRes);
  if (!restaurant) {
    throw new Error("Restaurant not found");
  }
  
  const name = restaurant.name.replace(/ /g, "_");

  if (restaurant.logo) {
    await imageRepository.deleteImage(restaurant.logo);
  }

  const imageURL = await imageRepository.uploadImage(
    name,
    file.buffer,
    file.mimetype,
  );
  restaurant.logo = imageURL;
  return await restaurantRepository.update(idRes, { logo: imageURL });
};

export {
  uploadMenuImage,
  uploadRestaurantLogo,
}; 