import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  private myAppUrl: string
  constructor(private http: HttpClient) {
    this.myAppUrl = "https://jsonplaceholder.typicode.com/posts"
  }


  getListPost(id:number): Observable<Post[]> {
    return this.http.get<Post[]>( `${this.myAppUrl}/?userId=${id}`)
  }
}
