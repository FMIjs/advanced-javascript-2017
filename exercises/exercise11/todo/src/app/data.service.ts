import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  data: any[] = [];
  todos$: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor() { }

  add(todo: any) {
    this.data = this.data.concat(todo);
    this.todos$.next(this.data);
  }
}
