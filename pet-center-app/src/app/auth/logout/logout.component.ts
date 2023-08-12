import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MessageDispatcherService } from 'src/app/core/message-dispatcher.service';
import { MessageType } from 'src/app/interfaces/messages';

import { DialogConfirmationService } from 'src/app/shared/dialog-confirmation.service';
import { EMPTY, switchMap } from 'rxjs';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent {

  previousUrl! : string | null
   
  constructor(
    private authService: AuthService,
    private router: Router,
    private messageDispatcher: MessageDispatcherService,
    private confirmationService: DialogConfirmationService,
  ) {

    
    this.confirmationService.openDialog('logout').pipe(
      switchMap(result => {
        
        if(result) {
          return this.authService.logout$()
          
        }else {
        
          this.router.navigate(['/'])
          return EMPTY
        }
      })
    ).subscribe(() => {
      this.messageDispatcher.notifyForMessage({
        text: 'You has been successfuly logged out',
        type: MessageType.Success,
      });
      this.router.navigate(['/']);
    })

   
  }
}
