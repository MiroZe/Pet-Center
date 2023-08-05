import { Component } from '@angular/core';
import { PetsService } from '../pets.service';
import { MessageDispatcherService } from 'src/app/core/message-dispatcher.service';
import { MessageType } from 'src/app/interfaces/messages';
import { IPet } from 'src/app/interfaces/pet';
import { Observable } from 'rxjs';

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
