import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { fromEvent as observableFromEvent } from 'rxjs/observable/fromEvent';
import { combineLatest as observableCombineLatest } from 'rxjs/observable/combineLatest';
import { map, debounceTime, withLatestFrom, mergeMap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('searchInput') searchInput: ElementRef;
  todos$: Observable<any[]>;
  searchTextLink$: BehaviorSubject<string>;
  subscription: Subscription;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.searchTextLink$ = new BehaviorSubject('');

    this.todos$ = observableCombineLatest(this.dataService.todos$, this.searchTextLink$).pipe(
      map(([todos, searchText]) => todos.filter(todo => searchText !== '' ? todo.title.indexOf(searchText) !== -1 : true))
    );
  }

  ngAfterViewInit() {
    this.subscription = observableFromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      map((event: any) => event.target.value),
      debounceTime(100)
    ).subscribe((data) => this.searchTextLink$.next(data));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
