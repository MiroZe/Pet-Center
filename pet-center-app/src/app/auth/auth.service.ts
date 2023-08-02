import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, catchError, map, tap } from 'rxjs';
import { IUser } from '../interfaces/user';
import { IPet } from '../interfaces/pet';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  user : IUser | undefined

  

  


  private user$$ = new BehaviorSubject<IUser | undefined>(undefined);
  user$ = this.user$$.asObservable();
  isUserLoggedIn$ = this.user$.pipe(map(user => !!user))

  constructor(private http: HttpClient) { }


  authenticate(): Observable<IUser> {
    return this.http
      .get<IUser>('/api/users/profile', { withCredentials: true })
      .pipe(tap(user => this.handleLogin(user)), catchError((err) => {
        return EMPTY;
      }))
  }

  handleLogin( newUser : IUser) {
   
    
    this.user = newUser
    this.user$$.next(newUser)
  }


  register$(username:string, email:string, location: string,password:string, rePassword: string, tel?: string) :Observable<IUser> {
    return this.http.post<IUser>('/api/register', {username,email,location, password,rePassword, tel})
    .pipe(tap(user=> {
      
      this.user$$.next(user)}))
    }

  logout$ ()  {
    return this.http.post('/api/logout',{}).pipe(tap(user => this.user$$.next(undefined)))
  }

  login$ (email:string, password: string) : Observable<IUser> {
    return this.http.post<IUser>('/api/login', {email,password}, {withCredentials:true})
    .pipe(tap(user => this.user$$.next(user)))
  }



  
addPetToFavorites$(petId: string)  {

  return this.http.patch('/api/pets/my-favorites',{petId}, {withCredentials:true} ).pipe(tap(user => {
    this.user$$.next(user as IUser)
  }))
  
  }

  // getMyFavorites$() :Observable<IPet[]>{
  //   //return this.http.get<IPet[]>('/api/pets/my-pets', {withCredentials:true})
  // }

 

}
