import * as bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import IRouter from './routes/router.interface';

class Api {

  /**
   * The api version.
   * major.minor.trivial
   * @type {string}
   */
  static version = '0.0.0';
  /**
   * The express app
   * @type {Express.Application}
   */
  app: express.Application;
  /**
   * The port the API will use
   * @type {number}
   */
  port: number = 2005;

  /**
   * Constructor
   * @param routers
   */
  constructor(routers: IRouter[]) {
    this.app = express();

    this.initializeMiddlewares();
    this.initializeRouters(routers);
  }

  /**
   * Start the API & listen to the port.
   */
  start() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }

  /**
   * Initialize middlewares
   * @see https://github.com/expressjs/body-parser#bodyparserjsonoptions
   */
  private initializeMiddlewares() {
    this.app.use(bodyParser.urlencoded({extended: true}));
    this.app.use(bodyParser.json());

    const corsOptions = {
      headers: `X-Access-Token, X-UI, Content-Type, Content-Disposition, Cache-Control, X-Requested-With, destination-host`,
      methods: 'GET,POST,OPTIONS,PUT,DELETE',
      origin : '*',
    };
    this.app.use(cors(corsOptions));
  }

  /**
   * Initialize the routers
   * @param routers
   */
  private initializeRouters(routers: IRouter[]) {
    routers.forEach((router) => {
      this.app.use('/', router.router);
    });
  }
}

export default Api;
