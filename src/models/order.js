const { Sequelize } = require("sequelize");


module.exports = (sequelize) => {
    const Order = sequelize.define('Order', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Comment: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        totalPrice: {
            type: Sequelize.FLOAT,
            allowNull: true,
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
    return Order;
    
};