const { Sequelize } = require("sequelize");


module.exports = (sequelize) => {
    const Restaurant = sequelize.define('Restaurant', {
        Name: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        Capacity: {
            type: Sequelize.INTEGER(2),
            allowNull: false
        },
        Logo: {
            type: Sequelize.STRING,
            allowNull: true
        },
        RIF: {
            type: Sequelize.INTEGER(10),
            allowNull: false
        },
        Address: {
            type: Sequelize.STRING(30),
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
    return Restaurant;
    
};