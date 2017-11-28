import { DbModel, IDbStructure } from './base';
import { User } from '../models/user';

class UserStructure implements IDbStructure<User> {
  public index: number;
  public entities: User[];
  public emails: string[];

  constructor() {
    this.index = 1
    this.entities = [{} as User];
    this.emails = [null];
  }
}

export class Users extends DbModel<User, UserStructure> {
  constructor() {
    super(/* ... */);
    // ...
  }
  // ...
}

export default new Users();
