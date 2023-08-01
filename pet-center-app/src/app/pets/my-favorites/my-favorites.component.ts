import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { IPet } from 'src/app/interfaces/pet';

@Component({
  selector: 'app-my-favorites',
  templateUrl: './my-favorites.component.html',
  styleUrls: ['./my-favorites.component.css']
})
export class MyFavoritesComponent implements OnInit{
 


  // pets!: IPet[]
  // constructor(private authService: AuthService){}
   ngOnInit(): void {
  //   this.authService.getMyFavorites$()
  //   .subscribe((pets) => this.pets = pets)
   }
}
