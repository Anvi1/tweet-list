import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TweeterFeedApiService {

  private apiUrl = 'assets/data.json';

  constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError((error: any) => {
        if (error.status === 404) {
          return throwError('Data not found');
        } else {
          console.error('API error:', error);
          return throwError('Failed to fetch data from the API');
        }
      })
    );
  }
}
