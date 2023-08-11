import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable, switchMap } from 'rxjs';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit{

  user$! : Observable<IUser>


  constructor(private router: Router, private authService: AuthService, private activatedRoute: ActivatedRoute,) {}
  ngOnInit(): void {
    
   this.user$ = this.activatedRoute.params.pipe(
      switchMap((params: Params)=> {

        const searchedUserId = params['userId'];
      
        return this.authService.getUser$(searchedUserId)
      })
      
    )
    
      

  }



  
}



