import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Petition } from '../interfaces/petition';
@Injectable({
  providedIn: 'root'
})
export class PetitionService {

  // private myAppUrl: string
  private myApiUrl: string

  constructor(private http: HttpClient) {
    // this.myAppUrl = "http://localhost:3000/"
    this.myApiUrl = "/api/actions/"
  }


   getPetition(): Observable<Petition[]> {
    return this.http.get<Petition[]>(this.myApiUrl)
  }

  deletePetition(id:number): Observable<void>{
    return   this.http.delete<void>(`${this.myApiUrl}/${id}`)
  }
}

