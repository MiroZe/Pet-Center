import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb:FormBuilder, private authService :AuthService, private router: Router) {}

  loginForm = this.fb.group({
    email: ['', [Validators.required,Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  })


  handleLogin() {

    if(this.loginForm.invalid) {return}

    const {email, password} = this.loginForm.value;
    this.authService.login$(email!,password!).subscribe( () => this.router.navigate(['/']))

  }

}
