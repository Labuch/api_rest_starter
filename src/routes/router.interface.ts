import {Router} from 'express';

interface IRouter {
  router: Router;
  initializeRoutes(): void;
  initializeMiddlewares(): void;
}

export default IRouter;
