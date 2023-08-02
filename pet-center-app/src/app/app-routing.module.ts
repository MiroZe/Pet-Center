import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

import { NoPageFoundComponent } from './core/no-page-found/no-page-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {path:'auth', loadChildren: () =>import('./auth/auth.module').then(m => m.AuthModule) },
  {path:'pets', loadChildren: () =>import('./pets/pets.module').then(m => m.PetsModule) },
  

  
  
  {path: '**', component: NoPageFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
