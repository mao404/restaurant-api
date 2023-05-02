const { DataTypes } = require("sequelize");
const sequelize = require("../loaders/sequelize/db");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  idNumber: {
    type: DataTypes.INTEGER(12),
    allowNull: false,
  },
  enable: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
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
