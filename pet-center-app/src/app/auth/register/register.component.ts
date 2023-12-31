import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { matchPasswordValidator } from 'src/app/shared/validators/match-password-validator';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MessageDispatcherService } from 'src/app/core/message-dispatcher.service';
import { MessageType } from 'src/app/interfaces/messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email] ],
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


    
    constructor( private fb: FormBuilder, private authService: AuthService, private router: Router,  
      private messageDispatcher: MessageDispatcherService) {}

registerHandler() {
  if(this.registerForm.invalid) {return};

  

  
  const {username, email, location, passGroup: {password, rePassword} ={}, tel} = this.registerForm.value
  
  
  this.authService.register$(username!, email!, location!,password!,rePassword!, tel || undefined )
  .subscribe((user)=> {
    this.messageDispatcher.notifyForMessage({text: `${user.username} has been successfuly registered`, type:MessageType.Success})

    this.router.navigate(['/'])})
  
  
}


}
