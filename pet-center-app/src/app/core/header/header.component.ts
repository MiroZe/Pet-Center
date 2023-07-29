import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {
  

  isLoggedIn$: Observable<boolean> = this.authService.isUserLoggedIn;
  
  constructor(public authService: AuthService) {
  }
 


 

}
