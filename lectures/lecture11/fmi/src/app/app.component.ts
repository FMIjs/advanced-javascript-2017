import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { PostService } from './post.service';
import { IPost } from './iPost';

import { switchMap, map, debounceTime } from 'rxjs/operators';
// import { of as observableOf } from 'rxjs/observable/of';
// import { from as observableFrom } from 'rxjs/observable/from';
import { fromEvent as observableFromEvent } from 'rxjs/observable/fromEvent';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  data: IPost[] = [];
  filteredData: IPost[] = [];

  @ViewChild('searchInput') searchInput: ElementRef;

  constructor(private postService: PostService) {
    postService.getBlogPosts().subscribe((data) => {
      this.data = data;
      this.filteredData = data;
    });

    postService.getBlogPosts().pipe(
      switchMap((data: IPost[]) =>
        this.postService.getBlogPosts().pipe(
          map((newData) => newData.concat(data)
          )))
    ).subscribe(console.log);
  }

  ngAfterViewInit() {
    observableFromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      debounceTime(1000),
      map((event: any) => event.target.value)
    )
      .subscribe(searchText => {
        this.filteredData = this.data.filter(post => post.body.indexOf(searchText) !== -1);
      });
  }

  btnClickHandler(id: number) {
    console.log(`post with id ${id} was clicked!`);
  }
}
