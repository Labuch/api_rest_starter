import * as express from 'express';
import baseController from '../controllers/base.controller';
import statusController from '../controllers/status.controller';
import IRouter from './router.interface';

/**
 * @typedef Status
 * @property {string} analyzerVersion.required
 * @property {string} apiVersion.required
 * @property {string} status.required
 */

/**
 * Get the Tradelabel service status.
 * @route GET /status
 * @group Status - Status about the Tradelabel service
 * @returns {Status.model} 200 - The request succeed
 * @returns {Error}  default - Unexpected error
 */

class StatusRouter implements IRouter {
  static path: string = '/status';
  router: express.Router;

  constructor() {
    this.router = express.Router();
    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router
      .get(StatusRouter.path, statusController.getStatus.bind(statusController))
      .options(StatusRouter.path, baseController.options.bind(baseController));
  }

  initializeMiddlewares() {
    // No middleware as the status is a public endpoint
  }
}

export default StatusRouter;
