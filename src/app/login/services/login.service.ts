import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private root = environment.appUrl;
  private url = '/member/login';

  constructor(
    private http: HttpClient
  ) { }

  get(path): Observable<any> {
    return this.http.get(`${this.root}${this.url}/${path}`).pipe((catchError(this.errorHandler)));
  }

  save(data: any, path?: any): Observable<any> {
    if (data.id) {
      return this.http.put(`${this.root}${this.url}${path}`, data).pipe(catchError(this.errorHandler));
    } else {
      return this.http.post(`${this.root}${this.url}`, data).pipe(catchError(this.errorHandler));
    }
  }

  public errorHandler(error: HttpErrorResponse) {
    // error.error instanceof ErrorEvent

    return throwError(error);
  }
}
