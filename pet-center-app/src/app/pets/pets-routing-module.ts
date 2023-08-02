import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {  NewPetComponent } from './new-pet/new-pet';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';

import { PetDetailsComponent } from './pet-details/pet-details.component';
import { MyPetsComponent } from './my-pets/my-pets.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'new-pet', component: NewPetComponent , canActivate:[AuthGuard]},
  { path: 'my-favorites', component: MyFavoritesComponent , canActivate:[AuthGuard]},
 
  { path: 'my-pets', component: MyPetsComponent , canActivate:[AuthGuard]},
  { path: ':petId', component: PetDetailsComponent , canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetsRoutingModule {}
