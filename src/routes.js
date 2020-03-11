import { Router } from 'express';
import SessionController from './controllers/SessionController';

const routes = new Router();

routes.post('/session', SessionController.store);

routes.get('/', (req, res) =>
  res.json({
    message: 'hey there :)',
  })
);

export default routes;
