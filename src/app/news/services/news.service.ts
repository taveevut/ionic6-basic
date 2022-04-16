import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient
  ) { }

  get(path: string): Observable<any> {
    return this.http.get(path).pipe((catchError(this.errorHandler)));
  }

  public errorHandler(error: HttpErrorResponse) {
    // error.error instanceof ErrorEvent

    return throwError(error);
  }
}
