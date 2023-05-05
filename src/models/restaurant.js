const { DataTypes } = require("sequelize");
const sequelize = require("../loaders/sequelize/db");

const Restaurant = sequelize.define("Restaurant", {
  name: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  capacity: {
    type: DataTypes.INTEGER(3),
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

module.exports = Restaurant;
