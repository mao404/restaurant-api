const { DataTypes } = require("sequelize");
const sequelize = require("../loaders/sequelize/db");

const Token = sequelize.define("Token", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  token: {
    type: DataTypes.STRING(80),
    required: true,
    allowNull: false,
  },
  createdAt: {
    type: "TIMESTAMP",
    defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    allowNull: false,
  },
  updatedAt: {
    type: "DATETIME",
    defaultValue: null,
    allowNull: true,
  },
});

module.exports = Token;

Token.belongsTo(require("../models/user"), {
  foreignKey: {
    unique: true,
  },
});
