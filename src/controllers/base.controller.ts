import * as express from 'express';

/**
 * The base controller. Contains some usefull methods for CORS support & output.
 */
export class BaseController {

    /**
     * Handle options requests
     * @param req
     * @param res
     */
    options(req: express.Request, res: express.Response): void {
        res.sendStatus(200);
    }

    /**
     * Add CORS headers to the result
     * @param res
     */
    protected setCorsHeaders(res: express.Response): void {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE');
        res.header('Access-Control-Allow-Headers', 'X-Access-Token, X-UI, Content-Type, '
          + 'Content-Disposition, Cache-Control, X-Requested-With, destination-host');
    }

    /**
     * Send error response
     * @param res
     * @param code
     * @param message
     */
    protected sendError(res: express.Response, code: number, message: any): void {
        res.status(code);
        res.send({
            code,
            error: message,
        });
    }
}

export default new BaseController();
