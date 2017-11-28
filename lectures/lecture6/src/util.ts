import { IObj } from './interfaces/iobj';

export function getName(obj: IObj): string {
  return obj.firstName + obj.lastName;
}

export function identity<T extends IObj>(obj: T): T {
  return obj;
}