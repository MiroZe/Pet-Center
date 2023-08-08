import { Injectable } from '@angular/core';
import {  MatDialog } from '@angular/material/dialog';

import { ConfirmationComponent } from './confirmation/confirmation.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogConfirmationService {

  constructor(private dialog: MatDialog) { }

  openDialog(action: string): Observable<boolean> {
    let title; 
    let message;
    if (action === 'delete') {
      title = 'Delete Confirmation';
      message = 'Are you sure you want to delete this pet?';
    } else if (action === 'logout') {
      title = 'Logout Confirmation';
      message = 'Are you sure you want to logout?';
    }
    const dialogRef = this.dialog.open(ConfirmationComponent ,{data:{title,message}});
  
    return dialogRef.afterClosed()
  }

}
