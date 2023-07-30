import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MessageDispatcherService } from 'src/app/core/message-dispatcher.service';
import { MessageType } from 'src/app/interfaces/messages';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {


  constructor(private authService : AuthService, private router: Router, private messageDispatcher: MessageDispatcherService) {

    this.authService.logout$().subscribe(() => {
      this.messageDispatcher.notifyForMessage({text: 'User has been successfuly logged out', type:MessageType.Success})
      this.router.navigate(['/'])
    } )

  }

  



}
