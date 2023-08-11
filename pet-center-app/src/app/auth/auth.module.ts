import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthRoutingModule } from './auth-routing-module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { MessageFormComponent } from './messages/message-form/message-form.component';
import { MessagesComponent } from './messages/messages/messages.component';
import { SharedModule } from '../shared/shared.module';
import { ViewUserComponent } from './view-user/view-user.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ProfileComponent,
    MessageFormComponent,
    MessagesComponent,
    ViewUserComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, SharedModule],

  exports: [
    AuthRoutingModule,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    
    MessageFormComponent,
  ],
})
export class AuthModule {}
