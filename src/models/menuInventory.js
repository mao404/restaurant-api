const { DataTypes } = require("sequelize");
const sequelize = require("../loaders/sequelize/db");

const menuInventory = sequelize.define("menuInventory", {});

module.exports = menuInventory;
