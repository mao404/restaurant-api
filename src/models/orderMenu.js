const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  const orderMenu = sequelize.define("orderMenu", {
    Ammount: {
      type: Sequelize.INTEGER,
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
  return orderMenu;
};
