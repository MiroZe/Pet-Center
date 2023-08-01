import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { IPet } from 'src/app/interfaces/pet';
import { PetsService } from '../pets.service';

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrls: ['./my-pets.component.css']
})
export class MyPetsComponent implements OnInit{
  pets!: IPet[]
  constructor(private petService: PetsService){}
  ngOnInit(): void {
   this.petService.getMyPets$().subscribe(pets => this.pets = pets
   )
  }
 

  
}
