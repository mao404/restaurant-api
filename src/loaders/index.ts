import ExpressServer from "./server/expressServer";
import sequelize from "./sequelize/db";
import config from "../config";
import logger from "./logger";

export default async (): Promise<void> => {
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