import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
      let body = res;
      return body || { };
    }

    getTimeSlot(): Observable<any> {
      return this.http.get('http://localhost:3000/getTimeSlot').pipe(
        map(this.extractData));
    }

    getTime(id): Observable<any> {
      return this.http.get('http://localhost:3000/getTimeSlot/' + id).pipe(
        map(this.extractData));
    }

    updateTime (id, params): Observable<any> {
      const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'my-auth-token'
            })
          };
      return this.http.put('http://localhost:3000/getTimeSlot/' + id, JSON.stringify(params), httpOptions).pipe(
        tap(_ => console.log(`updated time id=${id}`)),
        catchError(this.handleError<any>('updateTime'))
      );
    }

    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
    
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
    
        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}
