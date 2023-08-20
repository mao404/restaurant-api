const { Sequelize, DataTypes } = require("sequelize");
const config = require("../../config/index");
const logger = require("../logger/");

const sequelize = new Sequelize(
  config.database.database,
  config.database.user,
  config.database.pass,
  {
    host: config.database.host,
    dialect: "mysql",
  },
);

module.exports = sequelize;
