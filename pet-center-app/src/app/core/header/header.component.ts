import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{


  isUser!: boolean

  constructor(private authService : AuthService) {}


  ngOnInit(): void {
    this.isUser = this.authService.currentUser;
    
    
  }

}
