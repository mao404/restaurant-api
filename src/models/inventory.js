const { Sequelize } = require("sequelize");


module.exports = (sequelize) => {
    const Inventory = sequelize.define('Inventory', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Title: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        Stock: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        createdAt: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.NOW,
            allowNull: false  
        },
        updatedAt: {
            type: "DATETIME",
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
            allowNull: false
        }
    })
    return Inventory;
    
};