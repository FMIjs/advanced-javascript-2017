import { IEntryStructure } from '../db/base';

export class User implements IEntryStructure {
  public _id: number;
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string
  ) { }
}