import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';




@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {

  

 @Input() username: any
 @Input() ownerId: any;

 @Output() emitNewMessageModeChange = new EventEmitter<boolean>()

hideMessageMode: boolean = false

 messageForm!: FormGroup

  constructor(private authService: AuthService, private fb: FormBuilder)  {
    
    
  }
  ngOnInit(): void {

   
  this.messageForm = this.fb.group({
    username:  [this.username, [Validators.required, Validators.minLength(5)]],
    message: ['', [Validators.required ]],
  })

  
  }
  
  sendMessageHandler() {

    if(this.messageForm.invalid) { return}

    const{_, message} = this.messageForm.value;
    const date = new Date().toString()

    this.authService.postMessage$(this.ownerId,message,date).subscribe( () => {
      this.emitNewMessageModeChange.emit(!this.hideMessageMode)
    }
    )
    

  }

}
