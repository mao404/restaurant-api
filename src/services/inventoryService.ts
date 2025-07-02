import InventoryRepository from "../repositories/inventoryRepository";
const repository = new InventoryRepository();

interface InventoryData {
  title: string;
  unitType: "kg" | "gr" | "lt" | "ml" | "unit";
  quantity: number;
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

const save = async (inventory: InventoryData) => {
  return await repository.create(inventory);
};

const update = async (id: number, inventory: Partial<InventoryData>) => {
  return await repository.update(id, inventory);
};

const remove = async (id: number) => {
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