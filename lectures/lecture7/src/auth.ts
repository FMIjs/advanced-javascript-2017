import { Request, Response, NextFunction } from 'express';
import { users } from './users';
import { UserRole } from './enums';

export function auth(req: Request, res: Response, next: NextFunction) {
  const userId = +req.headers['auth'];
  const user = users.find(user => user.id === userId);
  if (!user || user.role !== UserRole.admin) {
    res.status(401).send('Unauthorized access 401').end();
    return;
  }
  next();
}