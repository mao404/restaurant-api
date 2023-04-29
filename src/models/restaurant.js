const { DataTypes } = require("sequelize");
const sequelize = require("../loaders/sequelize/db");

const Restaurant = sequelize.define("Restaurant", {
  Name: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  Capacity: {
    type: DataTypes.INTEGER(2),
    allowNull: false,
  },
  Logo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  RIF: {
    type: DataTypes.INTEGER(10),
    allowNull: false,
  },
  Address: {
    type: DataTypes.STRING(30),
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

module.exports = Restaurant;
