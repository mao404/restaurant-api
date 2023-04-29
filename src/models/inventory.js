const { DataTypes } = require("sequelize");
const sequelize = require("../loaders/sequelize/db");

const Inventory = sequelize.define("Inventory", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  Title: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  Stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdAt: {
    type: "TIMESTAMP",
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  updatedAt: {
    type: "DATETIME",
    defaultValue: sequelize.literal(
      "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
    ),
    allowNull: false,
  },
});

module.exports = Inventory;
