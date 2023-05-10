const { DataTypes } = require("sequelize");
const sequelize = require("../loaders/sequelize/db");

const Order = sequelize.define("Order", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  createdAt: {
    type: "TIMESTAMP",
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  updatedAt: {
    type: "DATETIME",
    defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    allowNull: false,
  },
});

module.exports = Order;

Order.belongsTo(require("../models/user"));

const Menu = require("../models/menu");
Order.belongsToMany(Menu, { through: "orderMenu" });
Order.hasOne(Menu);
