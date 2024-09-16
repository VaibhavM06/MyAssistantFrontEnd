import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private APIURl = 'http://localhost:3000/generate'

  constructor(private http: HttpClient) { }

  getResponse(prompt: string): Observable<any>{
    const headers = new HttpHeaders({'content-type': 'application/json'});
    return this.http.post<any>(this.APIURl, {prompt}, {headers})
  }
}
