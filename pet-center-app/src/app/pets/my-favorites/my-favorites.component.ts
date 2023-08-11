import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

import { PetsService } from '../pets.service';
import { Subscription, switchMap } from 'rxjs';




@Component({
  selector: 'app-my-favorites',
  templateUrl: './my-favorites.component.html',
  styleUrls: ['./my-favorites.component.css']
})
export class MyFavoritesComponent implements OnInit, OnDestroy{
 
 


  favoritePets: any
  isLoaded :boolean = false;
  subsF! : Subscription;
   
   constructor(private petService: PetsService, private authService: AuthService){}
  
   ngOnInit(): void {
    this.subsF = this.authService.user$.pipe(
      switchMap(user => 
        this.authService.getMyFavorites$() 

      )
    ).subscribe(user => {
      
      this.favoritePets = user.favorites
    
    });

    
   }


   removeFromFavorites(id: string) {
    

    this.authService.removeFromFavorites(id).subscribe()

   }

   ngOnDestroy(): void {
   this.subsF.unsubscribe()
  }
}


