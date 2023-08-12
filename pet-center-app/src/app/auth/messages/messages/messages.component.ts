import { Component, OnDestroy, OnInit } from '@angular/core';



import { IUser } from 'src/app/interfaces/user';
import { Observable, Subscription, switchMap } from 'rxjs';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit, OnDestroy{

  messages! :any
  messageSubs! : Subscription

constructor(private authService: AuthService) {}
ngOnInit(): void {
  this.messageSubs = this.authService.user$.pipe(
    switchMap(() => this.authService.getMessages$())
    ).subscribe((data) => {
      this.messages = data.messages;
      
      
    });
  }
  
  
  onDelete(messageId: string) {
    this.authService.deleteMessage(messageId).subscribe()
    
  }
  
  ngOnDestroy(): void {
    this.messageSubs.unsubscribe()
  }
}

