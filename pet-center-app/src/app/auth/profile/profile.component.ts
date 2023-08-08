import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/user';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  username$!: Observable<string>;
  isInEditMode: boolean = false;

  currentUser$!: Observable<IUser | undefined>;

  profileForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    tel: [''],
    location: ['', [Validators.required, Validators.minLength(3)]],
  });

  constructor(private authService: AuthService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.currentUser$ = this.authService.user$;
  }

  toggle() {
    this.isInEditMode = !this.isInEditMode;
  }

  onEditClick() {
    this.currentUser$.subscribe((user) =>
      this.profileForm.patchValue({
        username: user?.username,
        email: user?.email,
        location: user?.location,
        tel: user?.tel,
      })
    );

 
    this.toggle();
  }

  onCancelClick() {
    this.toggle();
  }

  editHandler() {
    if(this.profileForm.invalid) { return};
    const{username, email, location, tel} = this.profileForm.value;
    this.authService.updateUser$(username!, email!, location!, tel || undefined)
    .subscribe();
    this.toggle()
    
    
    

  }
}
