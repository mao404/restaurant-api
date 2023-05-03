const { DataTypes } = require("sequelize");
const sequelize = require("../loaders/sequelize/db");

const Menu = sequelize.define("Menu", {
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

module.exports = Menu;
