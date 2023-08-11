import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { UnAuthGuard } from '../core/guards/un-auth-guard.guard';
import { ProfileComponent } from './profile/profile.component';
import { MessagesComponent } from './messages/messages/messages.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent , canActivate:[UnAuthGuard]},
  { path: 'register', component: RegisterComponent, canActivate:[UnAuthGuard] },
  { path: 'profile', component: ProfileComponent ,canActivate:[AuthGuard]},
  { path: 'messages', component: MessagesComponent , canActivate:[AuthGuard]},
  { path: 'messages/:userId', component: ViewUserComponent, canActivate:[AuthGuard] },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}