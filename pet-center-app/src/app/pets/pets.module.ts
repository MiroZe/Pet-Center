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



@NgModule({
  declarations: [
    NewPetComponent,
    DashboardComponent,
    MyFavoritesComponent,
    MyAnnouncementsComponent,
    PetDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
    
  ], exports: [PetsRoutingModule]
})
export class PetsModule { }
