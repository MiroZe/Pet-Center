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
    tel: [''] ,
    location: ['',[Validators.required, Validators.minLength(3)] ],
    passGroup: this.fb.group(
      {
      password: ['',[Validators.required,Validators.minLength(5)] ],
      rePassword: ['',[Validators.required]]
    },
    {
      validators : [matchPasswordValidator('password', 'rePassword')]
    }
    )
  })


  constructor( private fb: FormBuilder) {}

registerHandler() {
  console.log(this.registerForm.value); // Check the form values
  console.log(this.registerForm.get('passGroup')?.errors?.['matchPasswordsValidator']); // Check the error object
  
}


}
