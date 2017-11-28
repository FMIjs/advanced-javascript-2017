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
    super('users', UserStructure);
  }

  insert(user: User) {
    if (this._db.emails.indexOf(user.email) !== -1) return Promise.reject(new Error('User already registered!'));
    this._db.emails.push(user.email);
    return super.insert(user);
  }

  findByEmail = (email: string): User => this._db.entities[this._db.emails.indexOf(email)];

  findByUsername = (username: string): User => username ?
    this._db.entities.find(user => `${user.firstName}.${user.lastName}`.toLowerCase() === username.toLowerCase()) : null;

  findById = (id: number): User => id ?
    this._db.entities.find(user => user._id === id) : null;
}

export default new Users();
