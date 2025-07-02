import MenuRepository from "../repositories/menuRepository";
const repository = new MenuRepository();
import ImageRepository from "../repositories/imageRepository";
const imageRepository = new ImageRepository();

interface MenuData {
  title: string;
  description: string;
  price: number;
  image?: string;
}

const findAll = async () => {
  return await repository.findAll();
};

const findById = async (id: number) => {
  return await repository.findById(id);
};

const findByTitle = async (title: string) => {
  return await repository.findByTitle(title);
};

const save = async (menu: MenuData) => {
  return await repository.create(menu);
};

const update = async (id: number, menu: Partial<MenuData>) => {
  return await repository.update(id, menu);
};

const remove = async (id: number) => {
  const menu = await repository.findById(id);
  if (menu && menu.image) {
    imageRepository.deleteImage(menu.image);
  }
  return await repository.remove(id);
};

export {
  findAll,
  findById,
  findByTitle,
  save,
  update,
  remove,
}; 