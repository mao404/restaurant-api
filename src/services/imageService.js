const ImageRepository = require("../repositories/imageRepository");
const imageRepository = new ImageRepository();
const MenuRepository = require("../repositories/menuRepository");
const menuRepository = new MenuRepository();
const RestaurantRepository = require("../repositories/restaurantRepository");
const restaurantRepository = new RestaurantRepository();

const uploadMenuImage = async (idMenu, file) => {
  const menu = await menuRepository.findById(idMenu);
  const imageURL = await imageRepository.uploadImage(
    menu.title,
    file.buffer,
    file.mimetype
  );
  menu.image = imageURL;
  return await menuRepository.update(idMenu, { image: imageURL });
};

const uploadRestaurantLogo = async (idRes, file) => {
  const restaurant = await restaurantRepository.findById(idRes);
  const imageURL = await imageRepository.uploadImage(
    restaurant.name,
    file.buffer,
    file.mimetype
  );
  restaurant.logo = imageURL;
  return await restaurantRepository.update(idRes, { logo: imageURL });
};

module.exports = {
  uploadMenuImage,
  uploadRestaurantLogo,
};
