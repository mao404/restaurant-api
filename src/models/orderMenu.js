const { DataTypes } = require("sequelize");
const sequelize = require("../loaders/sequelize/db");

const orderMenu = sequelize.define("orderMenu", {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  comment: {
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
    defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    allowNull: false,
  },
});

module.exports = orderMenu;
