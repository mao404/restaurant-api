const { DataTypes } = require("sequelize");
const sequelize = require("../loaders/sequelize/db");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  Name: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  idNumber: {
    type: DataTypes.INTEGER(12),
    allowNull: false,
  },
  Logo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Role: {
    type: DataTypes.STRING(30),
    allowNull: false,
    defaultValue: "ADMIN_ROLE",
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

module.exports = User;
