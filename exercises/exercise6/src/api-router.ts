import { Router } from 'express';
// import Users from './db/user';

// import { User } from './models/user';

export const apiRouter = Router();

interface ISortable<T, V> {
  elements: T[],
  comparator(first: T, second: T): V,
}

interface ISortAlg<T, V> {
  comparator: ISortable<T, V>
  sort(): void
}




interface BubleSort<T> extends ISortAlg<T, boolean> {
  
}

// const sort = new SortStrings;
// sort.elements = ['1','2','3'];
// sort.elements.push('1');

apiRouter.get('/', (req, res) => {
  res.send(`Hello from the API`).end();
});
