
function applyExtraSetup(sequelize) {
    const { Customer, Inventory, Menu, menuInventory, Order, orderMenu, Restaurant, User } = sequelize.models;


    Customer.hasOne(Order);
    Order.belongsTo(Customer)


    //Many to Many
    Order.belongsToMany(Menu, {through:'orderMenu'})
    Menu.belongsToMany(Order, {through: 'orderMenu'})
    Order.hasOne(Menu)
    Menu.belongsTo(Order)

    //Many to Many
    Menu.belongsToMany(Inventory, {through: 'menuInventory'})
    Inventory.belongsToMany(Menu, {through: 'menuInventory'})
    Menu.hasOne(Inventory)
    Inventory.belongsTo(Menu)

}

module.exports = { applyExtraSetup };