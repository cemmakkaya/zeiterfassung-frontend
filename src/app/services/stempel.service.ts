import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StempelService {
  private apiUrl = 'http://localhost:7070/stempel'; 

  constructor(private http: HttpClient) {}

  stempeln(): Observable<any> {
    return this.http.post(`${this.apiUrl}`, {}); 
  }
}
