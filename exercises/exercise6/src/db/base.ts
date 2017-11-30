import * as fs from 'fs';
import * as path from 'path';

export interface IEntryStructure {
  // We want each of our entries to have this structure
  _id: number
}

export interface IDbStructure<T> {
  index: number; // the next index
  entities: T[]; // the array of our entries
}

export class DefaultDbStructure<T> implements IDbStructure<T> {
  constructor(public index: number, public entities: T[]) { }
}

export class DbModel<T extends IEntryStructure, F extends IDbStructure<T>> {
  // ...
}
