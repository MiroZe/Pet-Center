import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { MessageDispatcherService } from '../message-dispatcher.service';
import { MessageType } from 'src/app/interfaces/messages';


@Injectable({
  providedIn: 'root'
})

export class UnAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router ,private messageDispatcher: MessageDispatcherService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
   
      return this.authService.isUserLoggedIn$.pipe(
        map((isUserLoggedIn) => {
          if (!isUserLoggedIn) {
            
            
            return true; 
            
          } else {
            this.messageDispatcher.notifyForMessage({text:'You are already logged in', type:MessageType.Error})

            return this.router.createUrlTree(['/']); 
          }
        })
      );
      
  }
}
