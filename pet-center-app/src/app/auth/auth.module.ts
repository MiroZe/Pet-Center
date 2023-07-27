import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthRoutingModule } from './auth-routing-module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, LogoutComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    AuthRoutingModule,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
  ],
})
export class AuthModule {}
