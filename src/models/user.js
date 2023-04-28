const { Sequelize } = require("sequelize");


module.exports = (sequelize) => {
    const User = sequelize.define('User', {
        Name: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        idNumber: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        Logo: {
            type: Sequelize.STRING,
            allowNull: true
        },
        Password: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        Role: {
            type: Sequelize.STRING(30),
            allowNull: false,
            defaultValue: "ADMIN_ROLE"
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
    return User;
    
};