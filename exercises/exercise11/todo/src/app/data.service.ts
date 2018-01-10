import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  counter = 0;
  todos: { [id: string]: { id: string, title: string, completed: boolean } } = {};
  ids: string[] = [];
  todos$: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor() { }

  add(title, completed) {
    const id = (this.counter++).toString();
    this.todos[id] = { id, title, completed };
    this.ids.push(id);
    this.pushUpdate();
  }

  statusChange(id: string, completed: boolean) {
    this.todos[id].completed = completed;
    this.pushUpdate();
  }

  private pushUpdate() {
    this.todos$.next(this.ids.map(id => this.todos[id]));
  }
}
