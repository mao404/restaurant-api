import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../loaders/sequelize/db";

interface RestaurantAttributes {
  id: number;
  name: string;
  capacity: number;
  logo?: string;
  rif: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}

interface RestaurantCreationAttributes extends Optional<RestaurantAttributes, "id" | "logo" | "createdAt" | "updatedAt"> {}

class Restaurant extends Model<RestaurantAttributes, RestaurantCreationAttributes> implements RestaurantAttributes {
  public id!: number;
  public name!: string;
  public capacity!: number;
  public logo?: string;
  public rif!: string;
  public address!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Restaurant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rif: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(30),
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
    tableName: "Restaurants",
  }
);

export default Restaurant; 