import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { AuthResponse } from './authresponse';
import { catchError, delay, finalize, tap } from 'rxjs/operators';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new Subject<User>();

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) {}

  apiKey: string = 'AIzaSyA3NQxImVMxgUQE6iq9Lj9VCqWralUP6zQ';
  url: string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`;
  url2: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`;

  signUp(email: string, password: string) {
    this.loadingService.setLoading(true);
    return this.http
      .post<AuthResponse>(this.url, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        finalize(() => {
          this.loadingService.setLoading(false);
        }),
        tap((response) => {
          const expirationDate = new Date(
            new Date().getTime() + +response.expiresIn * 1000
          );
          const _user = new User(
            response.email,
            response.localId,
            response.idToken,
            expirationDate
          );
          this.user.next(_user);
        })
      );
  }

  signIn(email: string, password: string) {
    this.loadingService.setLoading(true);
    return this.http
      .post<AuthResponse>(this.url2, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        finalize(() => {
          this.loadingService.setLoading(false);
        }),
        tap((response) => {
          const expirationDate = new Date(
            new Date().getTime() + +response.expiresIn * 1000
          );
          const _user = new User(
            response.email,
            response.localId,
            response.idToken,
            expirationDate
          );
          this.user.next(_user);
        })
      );
  }
}
