import winston from "winston";
import config from "../../config";

//To create the logger for development and production file logger
const transports: winston.transport[] = [];
transports.push(new winston.transports.Console());

const LoggerInstance = winston.createLogger({
  level: config.log.level,
  format: winston.format.simple(),
  transports,
});

export default LoggerInstance; 