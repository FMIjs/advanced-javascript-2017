import { UserRole } from '../enums';
import { IObj } from '../interfaces/iobj';

export class User implements IObj {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public role: UserRole
  ) { }
}