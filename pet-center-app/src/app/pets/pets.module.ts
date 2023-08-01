import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPetComponent } from './new-pet/new-pet';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';
import { MyAnnouncementsComponent } from './my-announcements/my-announcements.component';
import { RouterModule } from '@angular/router';
import { PetsRoutingModule } from './pets-routing-module';

import { PetDetailsComponent } from './pet-details/pet-details.component';
import { MaterialModule } from '../material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MyPetsComponent } from './my-pets/my-pets.component';



@NgModule({
  declarations: [
    NewPetComponent,
    DashboardComponent,
    MyFavoritesComponent,
    MyAnnouncementsComponent,
    PetDetailsComponent,
    MyPetsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
    
  ], exports: [PetsRoutingModule]
})
export class PetsModule { }
