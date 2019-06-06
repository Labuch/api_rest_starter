import * as express from 'express';
import Api from '../api';
import { BaseController } from './base.controller';

class StatusController extends BaseController {

  /**
   * Method to handle GET /status request
   * @param req
   * @param res
   */
  getStatus(req: express.Request, res: express.Response) {
    res.send({
      apiVersion: Api.version,
      status: 'ok',
    });
  }
}

export default new StatusController();
