const { DataTypes } = require("sequelize");
const sequelize = require("../loaders/sequelize/db");

const Inventory = sequelize.define("Inventory", {
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
    type: DataTypes.STRING(4),
    allowNull: false,
    enum: ["kg", "gr", "lt", "ml", "unit"],
  },
  quantity: {
    type: DataTypes.INTEGER(10),
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

module.exports = Inventory;
