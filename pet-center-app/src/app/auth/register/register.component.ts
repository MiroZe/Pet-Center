import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { matchPasswordValidator } from 'src/app/shared/validators/match-password-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required] ],
    tel: ['',[Validators.minLength(9)] ],
    location: ['',[Validators.required] ],
    passGroup: this.fb.group({
      password: ['',[Validators.required,Validators.minLength(5)] ],
      rePassword: ['', [Validators.required]]
    },
    {validators : [matchPasswordValidator('password', 'rePassword')]})
  })


  constructor( private fb: FormBuilder) {}




}
