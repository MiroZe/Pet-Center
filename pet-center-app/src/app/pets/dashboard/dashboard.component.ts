import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PetsService } from '../pets.service';
import { IPet } from 'src/app/interfaces/pet';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges{

  pets!: IPet[]

  constructor(private petService: PetsService) {

  }

  ngOnInit(): void {
    
    
    this.petService.loadAllPets$().subscribe(pets => this.pets = pets)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.pets = [...this.pets]
  }


  showFiltered(type:string) {
    this.petService.loadByType$(type).subscribe(
      (pets)=> this.pets = pets
    )
    
  }

}
