import { IObj } from '../interfaces/iobj';

export class Dog implements IObj {
  constructor(
    public firstName: string,
    public lastName: string
  ) { }
}