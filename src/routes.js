import { Router } from 'express';
import SessionController from './app/controllers/SessionController';

/**
 * Validators
 */
import { validateSessionStore } from './app/validators';

const routes = new Router();

/**
 * Routes
 */
routes.post('/session', validateSessionStore, SessionController.store);

routes.get('/', (req, res) =>
  res.json({
    message: 'hey there :)',
  })
);

export default routes;
