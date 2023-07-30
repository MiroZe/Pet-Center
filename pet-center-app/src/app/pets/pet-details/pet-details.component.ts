import { Component, OnInit } from '@angular/core';
import { PetsService } from '../pets.service';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { IPet } from 'src/app/interfaces/pet';
import { IUser } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit{

  pet!: IPet;
  isOwner : boolean = false;
  currentUser: IUser | undefined;

  constructor(private petService :PetsService ,
     private activatedRoute: ActivatedRoute,
      private authService: AuthService){}

  

  ngOnInit() {

    this.authService.user$.subscribe(user => this.currentUser = user);
    
    

    this.activatedRoute.params.pipe(
      switchMap((params :Params) => {
        const petdId = params['petId'];
        return this.petService.getOnePet(petdId)
      })
    ).subscribe(currenPet => {
      this.pet = currenPet;
     
      
      this.isOwner = currenPet.owner._id === this.currentUser?._id;
      
      
    })


  }



}
