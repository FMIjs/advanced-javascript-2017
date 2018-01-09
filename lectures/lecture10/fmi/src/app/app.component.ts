import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import { IUser } from './user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  users: IUser[];
  flag = false;
  numberStream: Observable<number>;
  rabitArray: any[];
  color1 = 'red';
  color2 = 'blue';
  // clock: string;
  constructor(private httpClient: HttpClient) {

  }

  changeValue(event) {
    this.flag = !this.flag;
  }

  ngOnInit() {


    // Observable.interval(1000).map(() => new Date()).subscribe((data) => {
    //   this.clock = data.toString();
    // });

    // this.numberStream = Observable.interval(1000);

    // this.numberStream.map(a => a % 2 === 0).subscribe((bool) => {
    //   this.flag = bool;
    // });

    // this.numberStream.subscribe((curr) => {
    //   this.rabitArray = new Array(curr).fill('🐇');
    // });
    // Observable.of(1, 2, 3).map(a => a + 1).subscribe((item) => {
    //   console.log(item);
    // });

    this.httpClient.get<IUser[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => {
        this.users = data;
      }, (err) => {
        console.error(err);
      }, () => {
        console.log('Completed');
      });
  }
}
