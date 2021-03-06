import { Router } from 'express';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';

import authMiddleware from './app/middlewares/auth';

/**
 * Validators
 */
import { validateSessionStore, validateRecipientStore } from './app/validators';

const routes = new Router();

/**
 * Routes
 */
routes.post('/session', validateSessionStore, SessionController.store);

/**
 * All routes below are protected with JWT
 */
routes.use(authMiddleware);

routes.post('/recipients', validateRecipientStore, RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);
routes.get('/recipients', RecipientController.index);
routes.delete('/recipients/:id', RecipientController.destroy);

routes.get('/', (req, res) =>
  res.json({
    message: 'hey there :)',
  })
);

export default routes;
