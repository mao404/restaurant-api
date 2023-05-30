const MenuRepository = require("../repositories/menuRepository");
const repository = new MenuRepository();
const ImageRepository = require("../repositories/imageRepository");
const imageRepository = new ImageRepository();

const findAll = async () => {
  return await repository.findAll();
};

const findById = async (id) => {
  return await repository.findById(id);
};

const findByTitle = async (title) => {
  return await repository.findByTitle(title);
};

const save = async (menu) => {
  return await repository.create(menu);
};

const update = async (id, menu) => {
  return await repository.update(id, menu);
};

const remove = async (id) => {
  const menu = await repository.findById(id);
  if (menu.image) {
    imageRepository.deleteImage(menu.image);
  }
  return await repository.remove(id);
};

module.exports = {
  findAll,
  findById,
  findByTitle,
  save,
  update,
  remove,
};
