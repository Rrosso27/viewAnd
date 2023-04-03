import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Albums } from '../interfaces/albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private myAppUrl: string
  constructor(private http: HttpClient) {
    this.myAppUrl = "https://jsonplaceholder.typicode.com"
  }


  getListAlbums(id:number): Observable<Albums[]> {
    return this.http.get<Albums[]>(`${this.myAppUrl}/albums?userId=${id}`)
  }
}
