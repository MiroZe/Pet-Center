import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { MessageDispatcherService } from '../message-dispatcher.service';
import { MessageType } from 'src/app/interfaces/messages';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router ,private messageDispatcher: MessageDispatcherService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
   

      if(this.authService.isLoggedUser) {
        
        console.log(this.authService.isLoggedUser);
        
        return true;
      } else {
        this.messageDispatcher.notifyForMessage({text: 'You can`\t access this resourse, please login or register ',type:MessageType.Error})
        this.router.navigate(['/auth/login'])
        return false
      }
  }
}
