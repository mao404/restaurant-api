import dotenv from "dotenv";

const envFound = dotenv.config();
if (!envFound) {
  throw new Error("Couldn't find .env file");
}

process.env.NODE_ENV = process.env.NODE_ENV || "development";

interface Config {
  port: number;
  api: {
    prefix: string;
  };
  log: {
    level: string | undefined;
  };
  swagger: {
    path: string;
  };
  database: {
    host: string | undefined;
    user: string | undefined;
    pass: string | undefined;
    database: string | undefined;
  };
  auth: {
    secret: string | undefined;
    ttl: string | undefined;
  };
  aws: {
    accessKeyId: string | undefined;
    privateAccessKey: string | undefined;
    s3BucketName: string | undefined;
  };
}

//Configuration of the api
const config: Config = {
  port: process.env.PORT ? parseInt(process.env.PORT) : 3001,
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

export default config; 