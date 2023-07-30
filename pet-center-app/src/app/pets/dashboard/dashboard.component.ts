import { Component, OnInit } from '@angular/core';
import { PetsService } from '../pets.service';
import { IPet } from 'src/app/interfaces/pet';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  pets!: IPet[]

  constructor(private petService: PetsService) {

  }

  ngOnInit(): void {
    this.petService.loadAllPets$().subscribe(pets => this.pets = pets)
  }

}
