import { where } from "sequelize";
import Menu from "../models/menu";

interface MenuData {
  title: string;
  description: string;
  price: number;
  image?: string;
}

class MenuRepository {
  constructor() {}

  async findAll() {
    return await Menu.findAll();
  }

  async findById(id: number) {
    return await Menu.findByPk(id);
  }

  async findByTitle(title: string) {
    return await Menu.findOne({ where: { title: title } });
  }

  async create(menu: MenuData) {
    return await Menu.create(menu);
  }

  async update(id: number, menu: Partial<MenuData>) {
    return await Menu.update(menu, { where: { id: id } });
  }

  async remove(id: number) {
    return await Menu.destroy({ where: { id: id } });
  }
}

export default MenuRepository; 