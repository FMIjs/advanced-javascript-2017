import { Router } from 'express';

export const viewRouter = Router();

viewRouter.get('/', (req, res) => {
  res.render('../views/index', { message: 'Hello world!!!' });
});