import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../loaders/sequelize/db";

interface MenuAttributes {
  id: number;
  title: string;
  description: string;
  price: number;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface MenuCreationAttributes extends Optional<MenuAttributes, "id" | "image" | "createdAt" | "updatedAt"> {}

class Menu extends Model<MenuAttributes, MenuCreationAttributes> implements MenuAttributes {
  public id!: number;
  public title!: string;
  public description!: string;
  public price!: number;
  public image?: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Menu.init(
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
    description: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
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
    tableName: "Menus",
  }
);

export default Menu; 