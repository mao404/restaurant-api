const { Sequelize, DataTypes } = require('sequelize');
const { applyExtraSetup } = require('./extraSetup')
const config = require('../../config/index')
const logger = require('../logger/')
  
const sequelize = new Sequelize(
    config.database.database, 
    config.database.user, 
    config.database.pass, 
    {
      host: config.database.host,
      dialect: 'mysql'
    });
  
  //check the progress and the outcome of the connection
  sequelize.authenticate().then(async() => {

  })
  
  //LOAD UP MODELS
  const modelDefiners = [
    require('../../models/user'),
    require('../../models/customer'),
    require('../../models/menu'),
    require('../../models/inventory'),
    require('../../models/order'),
    require('../../models/restaurant'),
    require('../../models/orderMenu'),
    require('../../models/menuInventory'),
    //Add more models here..
    //require('./models/item')
  
  ]
  
  //Define models according to their files
  for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
    
  }
  
  //EXECUTE ASSOCIATES AND EXTRA SETUP
  applyExtraSetup(sequelize);
  
  //Sync all models at once
/*   sequelize.sync().then(async () => {
    try {
      await sequelize.sync({ alter: true})
      logger.info('All models were synchronized successfully')
    } catch (error) {
      logger.error('Error connecting to the database', error)
    }
  }) */

module.exports = sequelize