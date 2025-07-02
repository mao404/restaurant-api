import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../loaders/sequelize/db";

interface OrderMenuAttributes {
  quantity: number;
  comment?: string;
  OrderId?: number;
  MenuId?: number;
  createdAt: Date;
  updatedAt: Date;
}

interface OrderMenuCreationAttributes extends Optional<OrderMenuAttributes, "comment" | "OrderId" | "MenuId" | "createdAt" | "updatedAt"> {}

class OrderMenu extends Model<OrderMenuAttributes, OrderMenuCreationAttributes> implements OrderMenuAttributes {
  public quantity!: number;
  public comment?: string;
  public OrderId?: number;
  public MenuId?: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

OrderMenu.init(
  {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING(50),
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
    tableName: "orderMenus",
  }
);

export default OrderMenu; 