import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPetComponent } from './new-pet/new-pet';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';

import { RouterModule } from '@angular/router';
import { PetsRoutingModule } from './pets-routing-module';


import { PetDetailsComponent } from './pet-details/pet-details.component';
import { MaterialModule } from '../app.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MyPetsComponent } from './my-pets/my-pets.component';
import { SearchComponent } from './search/search.component';
import { AuthModule } from '../auth/auth.module';



@NgModule({
  declarations: [
    NewPetComponent,
    DashboardComponent,
    MyFavoritesComponent,
    
    PetDetailsComponent,
    MyPetsComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    AuthModule
    
    
  ], exports: [PetsRoutingModule]
})
export class PetsModule { }
