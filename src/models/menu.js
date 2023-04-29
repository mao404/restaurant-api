const { DataTypes } = require("sequelize");
const sequelize = require("../loaders/sequelize/db");

const Menu = sequelize.define("Menu", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  Title: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  Description: {
    type: DataTypes.INTEGER(2),
    allowNull: false,
  },
  Price: {
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
    defaultValue: sequelize.literal(
      "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
    ),
    allowNull: false,
  },
});

module.exports = Menu;
