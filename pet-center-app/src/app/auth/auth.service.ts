import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, catchError, tap } from 'rxjs';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  user : IUser | undefined

  get currentUser() : boolean {
    return !!this.user
  }


  private user$$ = new BehaviorSubject<IUser | undefined>(undefined);
  user$ = this.user$$.asObservable()

  constructor(private http: HttpClient) { }


  authenticate(): Observable<IUser> {
    return this.http
      .get<IUser>('/api/users/profile', { withCredentials: true })
      .pipe(tap(user => this.handleLogin(user)), catchError((err) => {
        return EMPTY;
      }))
  }

  handleLogin( newUser : IUser) {
    console.log(newUser);
    
    this.user = newUser
    this.user$$.next(newUser)
  }


  register$(username:string, email:string, password:string, rePassword: string, location: string,tel?: string) :Observable<IUser> {
    return this.http.post<IUser>('/api/register', {username,email,location, password,rePassword, tel})
    .pipe(tap(user=> this.user$$.next(user)))
    }

  logout$ ()  {
    return this.http.post('/api/logout',{}).pipe(tap(user => this.user$$.next(undefined)))
  }

}
