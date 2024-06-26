const ExpressServer = require("./server/expressServer");
const sequelize = require("./sequelize/db");
const config = require("../config");
const logger = require("./logger");

module.exports = async () => {
  try {
    await sequelize.authenticate();
    //sequelize.sync({ alter: true });
    sequelize.sync({ force: false });
    logger.info("Connection to the database has been established.");
    const server = new ExpressServer();
    logger.info("Express Loaded");

    server.start();
    logger.info(
      `#################################
        Server listening on port ${config.port}
        #############################`
    );
  } catch (error) {
    logger.info("Unable to connect to the database:", error);
  }
};
