import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../loaders/sequelize/db";

type UnitType = "kg" | "gr" | "lt" | "ml" | "unit";

interface InventoryAttributes {
  id: number;
  title: string;
  unitType: UnitType;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

interface InventoryCreationAttributes extends Optional<InventoryAttributes, "id" | "createdAt" | "updatedAt"> {}

class Inventory extends Model<InventoryAttributes, InventoryCreationAttributes> implements InventoryAttributes {
  public id!: number;
  public title!: string;
  public unitType!: UnitType;
  public quantity!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Inventory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    unitType: {
      type: DataTypes.ENUM("kg", "gr", "lt", "ml", "unit"),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Inventories",
  }
);

export default Inventory; 