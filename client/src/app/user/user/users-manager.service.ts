import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, tap, Observable, of } from 'rxjs';
import { IUser } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersManagerService {
  baseURL: string = '';

  constructor(private http: HttpClient) {
    if (!environment.production) {
      this.baseURL = environment.apiURL;
    }
  }

  getUsers(): Observable<IUser[]> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.get<IUser[]>(this.baseURL + '/api/getUsers/', options).pipe(catchError(this.handleError<IUser[]>('getUsers', [])));
  }

  getUser(userId: string): Observable<IUser> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
    return this.http
      .get<IUser>(this.baseURL + `/api/users/${userId}`, options)
      .pipe(catchError(this.handleError<IUser>('getUser')));
  }

  saveUser(user: IUser): Observable<IUser> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
    if(user._id){
      console.log(`Putting user: ${user._id}`);
      return this.http.put<IUser>(this.baseURL + `/api/users/${user._id}`, options).pipe(catchError(this.handleError<IUser>('saveUser')));
    } else {
      return this.http
        .post<IUser>(this.baseURL + `/api/users/new`, options)
        .pipe(catchError(this.handleError<IUser>('saveUser')));
    }
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      if (error.status !== 401) {
        console.log(error);
      }
      return of(result as T);
    };
  }
}
