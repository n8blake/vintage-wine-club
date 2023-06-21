import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, tap, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../user/user';
@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  currentUser?: IUser;
  activeUserToken?: string;
  baseURL: string = '';

  constructor(private http: HttpClient) {
    if (!environment.production) {
      this.baseURL = environment.apiURL;
    }
  }

  ngOnInit(): void {
    console.log('init auth service');
    const token = localStorage.getItem('token');
    if (token) {
      console.log(token);
    } else {
      console.log('not yet logged in');
    }
  }

  loginUser(email: string, password: string) {
    const loginInfo = {
      email,
      password,
    };

    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http
      .post(this.baseURL + '/api/auth/login/password', loginInfo, options)
      .pipe(
        tap((data: any): void => {
          console.log(data);
          if (data && data.token) {
            localStorage.setItem('token', data.token);
          }
          this.currentUser = <IUser>data;
        })
      )
      .pipe(
        catchError((err) => {
          return of(false);
        })
      );
  }

  logout() {
    this.currentUser = undefined;
    localStorage.removeItem('token');
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.get(this.baseURL + '/api/auth/logout');
  }

  isAuthenticated(): boolean {
    return !!this.currentUser?._id;
  }

  getCurrentIdentity(): Observable<IUser> {
    return this.http.get(this.baseURL + '/api/users/currentIdentity').pipe(
      tap((data: any) => {
        //console.log(data.status);
        if (data) {
          if (data.token) {
            localStorage.setItem('token', data.token);
          }
          this.currentUser = <IUser>data;
        }
      }),
      catchError(this.handleError<IUser>('getCurrentIdentity'))
    );
  }

  checkAuthenticationStatus(): Observable<IUser> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.get(this.baseURL + '/api/auth/login', options).pipe(
      tap((data: any) => {
        //console.log(data.status);
        if (data) {
          if (data.token) {
            localStorage.setItem('token', data.token);
          }
          this.currentUser = <IUser>data;
        }
      }),
      catchError(this.handleError<IUser>('checkAuth'))
    );
  }

  updateCurrentUser(updatedUser: IUser) {
    this.currentUser = updatedUser;

    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put(
      `/api/users/${this.currentUser._id}`,
      this.currentUser,
      options
    );
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
