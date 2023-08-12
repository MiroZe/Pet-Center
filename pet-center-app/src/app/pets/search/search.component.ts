import { Component } from '@angular/core';
import { PetsService } from '../pets.service';


import { IPet } from 'src/app/interfaces/pet';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  pets: IPet[] | undefined;
  isClicked :boolean = false;
  

constructor(private petService:PetsService){}

  searchPets(query: string, term: string) {

    this.isClicked = true
    this.petService.searchPets$(query,term).subscribe((pets) => this.pets = pets
    )

  }
}
