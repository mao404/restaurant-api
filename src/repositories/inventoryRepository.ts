import { where } from "sequelize";
import Inventory from "../models/inventory";

interface InventoryData {
  title: string;
  unitType: "kg" | "gr" | "lt" | "ml" | "unit";
  quantity: number;
}

class InventoryRepository {
  constructor() {}

  async findAll() {
    return await Inventory.findAll();
  }

  async findById(id: number) {
    return await Inventory.findByPk(id);
  }

  async findByTitle(title: string) {
    return await Inventory.findOne({ where: { title: title } });
  }

  async create(inventory: InventoryData) {
    return await Inventory.create(inventory);
  }

  async update(id: number, inventory: Partial<InventoryData>) {
    return await Inventory.update(inventory, { where: { id: id } });
  }

  async remove(id: number) {
    return await Inventory.destroy({ where: { id: id } });
  }
}

export default InventoryRepository; 