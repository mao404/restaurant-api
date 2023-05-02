const { DataTypes } = require("sequelize");
const sequelize = require("../loaders/sequelize/db");

const Customer = sequelize.define(
  "Customer",
  {
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
    telephone: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    idNumber: {
      type: DataTypes.INTEGER(12),
      allowNull: false,
      unique: true,
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
  },
  {
    /*   indexes: [
    {
      unique: true,
      fields: ['idNumber']
    }
  ] */
  }
);

module.exports = Customer;
