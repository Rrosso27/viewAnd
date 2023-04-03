import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private myAppUrl: string
  constructor(private http: HttpClient) {
    this.myAppUrl = "https://jsonplaceholder.typicode.com/users"
  }


  getListUser(): Observable<User[]> {
    return this.http.get<User[]>(this.myAppUrl)
  }
}
