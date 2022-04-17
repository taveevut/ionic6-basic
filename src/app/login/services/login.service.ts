import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = environment.appUrl;
  private path = '/member/login';

  constructor(
    private http: HttpClient
  ) { }

  save(data: any): Observable<any> {
    if (data.id) {
      return this.http.put(`${this.url}${this.path}`, data).pipe(catchError(this.errorHandler));
    } else {
      return this.http.post(`${this.url}${this.path}`, data).pipe(catchError(this.errorHandler));
    }
  }

  public errorHandler(error: HttpErrorResponse) {
    // error.error instanceof ErrorEvent

    return throwError(error);
  }
}
