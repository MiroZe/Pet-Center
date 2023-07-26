import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewAnnouncementComponent } from './new-announcement/new-announcement.component';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';
import { MyAnnouncementsComponent } from './my-announcements/my-announcements.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'new-announcement', component: NewAnnouncementComponent },
  { path: 'my-favorites', component: MyFavoritesComponent },
  { path: 'my-announcements', component: MyAnnouncementsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetsRoutingModule {}
