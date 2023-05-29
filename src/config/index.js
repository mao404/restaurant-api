const dotenv = require("dotenv");

const envFound = dotenv.config();
if (!envFound) {
  throw new Error("Couldn't find .env file");
}

process.env.NODE_ENV = process.env.NODE_ENV || "development";

//Configuration of the api
module.exports = {
  port: process.env.PORT,
  api: {
    prefix: "/api/v1",
  },
  log: {
    level: process.env.LOG_LEVEL,
  },
  swagger: {
    path: "/documentation",
  },
  database: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
  },
  auth: {
    secret: process.env.AUTH_SECRET,
    ttl: process.env.AUTH_TIME,
  },
  aws: {
    accessKeyId: process.env.AWS_PUBLIC_ACCESS_KEY,
    privateAccessKey: process.env.AWS_PRIVATE_ACCESS_KEY,
    s3BucketName: process.env.AWS_S3_BUCKET_NAME,
  },
};
