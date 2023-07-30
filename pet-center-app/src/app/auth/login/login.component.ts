import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageDispatcherService } from 'src/app/core/message-dispatcher.service';
import { MessageType } from 'src/app/interfaces/messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messageDispatcher: MessageDispatcherService
  ) {}

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  handleLogin() {
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;
    this.authService.login$(email!, password!).subscribe((user) => {
      this.messageDispatcher.notifyForMessage({
        text: `${user.username} has been successfuly logged in`,
        type: MessageType.Success,
      });
      this.router.navigate(['/']);
    });
  }
}
