import { Component, OnInit } from '@angular/core';



import { IUser } from 'src/app/interfaces/user';
import { Observable, switchMap } from 'rxjs';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit{

  messages! :any


constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.user$.pipe(
      switchMap(() => this.authService.getMessages$())
    ).subscribe((data) => {
      this.messages = data.messages;
      
      
    });
  }


  onDelete(messageId: string) {
    this.authService.deleteMessage(messageId).subscribe()
    
    

  }
}

