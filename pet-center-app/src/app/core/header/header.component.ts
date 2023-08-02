import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { MessageDispatcherService } from '../message-dispatcher.service';
import { MessageType } from 'src/app/interfaces/messages';
import { IUser } from 'src/app/interfaces/user';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit, OnDestroy{

  private subscription! : Subscription;
  message: string = '';
  hasMessage!: boolean;
  user :IUser | undefined
  

  isLoggedIn$: Observable<boolean> = this.authService.isUserLoggedIn;
  
  constructor(public authService: AuthService, private messageDispatcher : MessageDispatcherService) {
  }
 
ngOnInit(): void {

  
  
  this.subscription = this.messageDispatcher.messageQ$.subscribe(
    newMessage => {
      this.message = newMessage?.text || '';
      this.hasMessage = newMessage?.type == MessageType.Error

      if(this.message) {
  
        setTimeout(()=> {
          this.messageDispatcher.clearMessage()
  
        }, 4000)
       }
    }

  )

  this.authService.user$.subscribe((user)=>this.user = user )
}

ngOnDestroy(): void {
  this.subscription.unsubscribe()
}

 

}
