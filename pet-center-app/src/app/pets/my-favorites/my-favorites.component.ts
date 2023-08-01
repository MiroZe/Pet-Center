import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

import { PetsService } from '../pets.service';


@Component({
  selector: 'app-my-favorites',
  templateUrl: './my-favorites.component.html',
  styleUrls: ['./my-favorites.component.css']
})
export class MyFavoritesComponent implements OnInit{
 


   pets! : any
   constructor(private petService: PetsService){}
   ngOnInit(): void {
    this.petService.getMyFavorites$()
    .subscribe((pets ) => {
      this.pets = pets
     
      
    })
   }
}
