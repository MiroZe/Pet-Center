import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {  NewPetComponent } from './new-pet/new-pet';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';
import { MyAnnouncementsComponent } from './my-announcements/my-announcements.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { MyPetsComponent } from './my-pets/my-pets.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'new-pet', component: NewPetComponent },
  { path: 'my-favorites', component: MyFavoritesComponent },
 
  { path: 'my-pets', component: MyPetsComponent },
  { path: ':petId', component: PetDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetsRoutingModule {}
