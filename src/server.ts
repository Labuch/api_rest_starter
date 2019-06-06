import fs from 'fs';
import App from './api';
import config from './config';
import StatusRouter from './routes/status.route';

// Setup app
const app = new App([
  new StatusRouter(),
]);
app.port = config.api.port;

// Start server
app.start();
