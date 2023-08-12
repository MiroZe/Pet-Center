import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { PetsService } from '../pets.service';
import { IPet } from 'src/app/interfaces/pet';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges, OnDestroy{

  pets!: IPet[]
  dashS! : Subscription

  constructor(private petService: PetsService) {

  }
  

  ngOnInit(): void {
    
    
    this.dashS =this.petService.loadAllPets$().subscribe(pets => this.pets = pets)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.pets = [...this.pets]
  }


  showFiltered(type:string) {
    this.petService.loadByType$(type).subscribe(
      (pets)=> this.pets = pets
    )
    
  }


  ngOnDestroy(): void {
    this.dashS.unsubscribe()
  }

}
