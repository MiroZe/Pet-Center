import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { UnAuthGuard } from '../core/guards/un-auth-guard.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent , canActivate:[UnAuthGuard]},
  { path: 'register', component: RegisterComponent, canActivate:[UnAuthGuard] },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}