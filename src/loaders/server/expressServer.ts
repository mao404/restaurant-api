import express, { Request, Response, NextFunction } from "express";
import path from "path";
import morgan from "morgan";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import config from "../../config";
import logger from "../logger";

class ExpressServer {
  private app: express.Application;
  private port: number;
  private basePathUser: string;
  private basePathMenu: string;
  private basePathInventory: string;
  private basePathRestaurant: string;
  private basePathLogin: string;
  private basePathOrder: string;

  constructor() {
    this.app = express();
    this.port = config.port;
    this.basePathUser = `${config.api.prefix}/users`;
    this.basePathMenu = `${config.api.prefix}/menu`;
    this.basePathInventory = `${config.api.prefix}/inventory`;
    this.basePathRestaurant = `${config.api.prefix}/restaurant`;
    this.basePathLogin = `${config.api.prefix}/auth`;
    this.basePathOrder = `${config.api.prefix}/order`;

    this._middlewares();
    this._swaggerConfig();
    this._cors();

    this._routes();

    this._notFound();
    this._errorHandler();
  }

  private _middlewares(): void {
    this.app.use(express.json());
    //Console log of each request to the API
    this.app.use(morgan("tiny"));
  }

  private _routes(): void {
    //Request to the API to check if it is online
    this.app.head("/status", (req: Request, res: Response) => {
      res.status(200).end();
    });

    this.app.get("/tests", (req: Request, res: Response) => {
      res.sendFile(path.join(__dirname + "../../../postman/report.html"));
    });

    this.app.use(this.basePathUser, require("../../routes/users").default);
    this.app.use(this.basePathMenu, require("../../routes/menu").default);
    this.app.use(this.basePathInventory, require("../../routes/inventory").default);
    this.app.use(this.basePathRestaurant, require("../../routes/restaurant").default);
    this.app.use(this.basePathLogin, require("../../routes/auth").default);
    this.app.use(this.basePathOrder, require("../../routes/order").default);
  }

  private _notFound(): void {
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      const err: any = new Error("Not Found");
      err.code = 404;
      next(err);
    });
  }

  private _errorHandler(): void {
    this.app.use((err: any, req: Request, res: Response, next: NextFunction) => {
      const code = err.code || 500;

      logger.error(
        `${code} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`
      );
      logger.error(err.stack);

      const body = {
        error: {
          code,
          message: err.message,
          detail: err.data,
        },
      };
      res.status(code).json(body);
    });
  }

  private _cors(): void {
    this.app.use(cors());
  }

  //Swagger configuration for the documentation in the route imported from config file
  private _swaggerConfig(): void {
    this.app.use(
      config.swagger.path,
      swaggerUi.serve,
      swaggerUi.setup(require("../swagger/swagger.json"))
    );
  }

  async start(): Promise<void> {
    this.app.listen(this.port, (error?: Error) => {
      if (error) {
        logger.error(error);
        process.exit(1);
        return;
      }
    });
  }
}

export default ExpressServer; 