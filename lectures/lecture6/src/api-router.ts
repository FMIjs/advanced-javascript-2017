import { Router } from 'express';
import { User } from './models/user';
import { UserRole } from './enums';
import { auth } from './auth';
import { users } from './users';
import { getName, identity } from './util';

export const apiRouter = Router();
let counter = 0;

apiRouter.get('/users', auth, (req, res) => {
  res.send(users).end();
});

apiRouter.post('/user', (req, res) => {
  const { firstName, lastName } = req.body;
  const id = counter++;
  const newUser = new User(id, firstName, lastName, UserRole.user);
  users.push(newUser);
  res.send(users).end();
});