import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAnnouncementComponent } from './new-announcement/new-announcement.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';
import { MyAnnouncementsComponent } from './my-announcements/my-announcements.component';
import { RouterModule } from '@angular/router';
import { PetsRoutingModule } from './pets-routing-module';



@NgModule({
  declarations: [
    NewAnnouncementComponent,
    DashboardComponent,
    MyFavoritesComponent,
    MyAnnouncementsComponent
  ],
  imports: [
    CommonModule,RouterModule
  ], exports: [PetsRoutingModule]
})
export class PetsModule { }
