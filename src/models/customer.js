const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  const Customer = sequelize.define("Customer", {
    Name: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    Telephone: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
    },
    idNumber: {
      type: Sequelize.INTEGER(12),
      allowNull: false,
      primaryKey: true,
    },
    createdAt: {
      type: "TIMESTAMP",
      defaultValue: Sequelize.NOW,
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
  return Customer;
};
