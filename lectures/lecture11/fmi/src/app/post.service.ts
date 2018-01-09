import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from './iPost';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  getBlogPosts() {
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
  }

}
