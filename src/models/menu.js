const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  const Menu = sequelize.define("Menu", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Title: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    Description: {
      type: Sequelize.INTEGER(2),
      allowNull: false,
    },
    Price: {
      type: Sequelize.FLOAT,
      allowNull: false,
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
  return Menu;
};
