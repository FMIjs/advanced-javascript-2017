import { Router } from 'express';
import Users from './db/user';

import { User } from './models/user';

export const apiRouter = Router();

apiRouter.get('/', (req, res) => {
  res.send(`Hello from the API`).end();
});
