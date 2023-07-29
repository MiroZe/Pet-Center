import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private user$$ = new BehaviorSubject<IUser | undefined>(undefined);
  user$ = this.user$$.asObservable()

  constructor(private http: HttpClient) { }


  register$(username:string, email:string, password:string, rePassword: string, location: string,tel?: string)  {
    return this.http.post<IUser>('/api/register', {username,email,location, password,rePassword, tel})
    .pipe(tap(user=> this.user$$.next(user)))
    }

}
