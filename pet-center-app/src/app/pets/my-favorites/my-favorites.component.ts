import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

import { PetsService } from '../pets.service';
import { switchMap } from 'rxjs';




@Component({
  selector: 'app-my-favorites',
  templateUrl: './my-favorites.component.html',
  styleUrls: ['./my-favorites.component.css']
})
export class MyFavoritesComponent implements OnInit{
 
 


  favoritePets: any
  isLoaded :boolean = false
   
   constructor(private petService: PetsService, private authService: AuthService){}
   ngOnInit(): void {
    this.authService.user$.pipe(
      switchMap(user => 
        this.authService.getMyFavorites$() 

      )
    ).subscribe(user => {
      //this.isLoaded = true
      this.favoritePets = user.favorites
    
    });

    
   }


   removeFromFavorites(id: string) {
    

    this.authService.removeFromFavorites(id).subscribe()

   }
}


