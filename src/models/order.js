const { DataTypes } = require("sequelize");
const sequelize = require("../loaders/sequelize/db");

const Order = sequelize.define("Order", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  Comment: {
    type: DataTypes.STRING(30),
    allowNull: false,
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
    defaultValue: sequelize.literal(
      "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
    ),
    allowNull: false,
  },
});

module.exports = Order;
