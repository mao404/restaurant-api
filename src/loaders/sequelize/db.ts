import { Sequelize, DataTypes } from "sequelize";
import config from "../../config/index";
import logger from "../logger/";

const sequelize = new Sequelize(
  config.database.database || "",
  config.database.user || "",
  config.database.pass || "",
  {
    host: config.database.host,
    dialect: "mysql",
  },
);

export default sequelize; 