import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Post } from '../models/post';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }

  public getPosts(): Observable<Post[]> {

    const requestUrl: string =
      'https://jsonplaceholder.typicode.com/posts';

    return this.http.get<any>(requestUrl)
      .pipe();

  }

  public getPostById(id): Observable<Post[]> {
    let post;
    return new Observable(observer => {

      this.getPosts().subscribe(res => {
        post = res;
        observer.next(post.find(p => p.id == id));
      }, err => {
        observer.error(err);
      });
    });
  }

}
