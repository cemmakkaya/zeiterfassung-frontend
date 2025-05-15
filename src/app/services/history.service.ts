import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface StempelEintrag {
  datum: string;
  ersteEinstempeln: string;
  ersteAustempeln: string;
  mittagspauseDauer: string;
  zweiteEinstempeln: string;
  zweiteAustempeln: string;
  arbeitszeit: string;
}

@Injectable({ providedIn: 'root' })
export class HistoryService {
  private apiUrl = 'http://localhost:7070/api/history';

  constructor(private http: HttpClient) {}

  getHistory(): Observable<StempelEintrag[]> {
    return this.http.get<StempelEintrag[]>(this.apiUrl);
  }
}
