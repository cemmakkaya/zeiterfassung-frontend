import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StempelService {
  private baseUrl = 'http://localhost:8080'; // Backend-URL

  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:7070/api/stempel';


  stempeln(data: any): Observable<any> {
  return this.http.post(this.apiUrl, data);
}

  getHistory(userId: number) {
    return this.http.get(`${this.baseUrl}/stamp/user/${userId}`);
  }
}
