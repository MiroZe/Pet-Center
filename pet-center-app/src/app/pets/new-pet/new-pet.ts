import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { IUser } from 'src/app/interfaces/user';
import { PetsService } from '../pets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.html',
  styleUrls: ['./new-pet.css'],
})
export class NewPetComponent implements OnInit {
  imagePattern: string = '^https?://.+';

  currentUser!: IUser | undefined;

  newPetForm = this.fb.group({
    type: ['', [Validators.required]],
    breed: ['', [Validators.required, Validators.minLength(3)]],
    name: ['', [Validators.required]],
    image: ['', [Validators.required, Validators.pattern(this.imagePattern)]],
    gender: ['', [Validators.required]],
    age: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
    location: ['', [Validators.required, Validators.minLength(3)]],
    tel: [''],
    email: ['', [Validators.required, Validators.email]],
    description: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(200),
      ],
    ],
  });

  constructor(
    private fb: FormBuilder,
    private authServise: AuthService,
    private petService: PetsService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.authServise.user$.subscribe((user) => {
      this.currentUser = user;

      this.newPetForm.patchValue({
        location: this.currentUser?.location,
        tel: this.currentUser?.tel,
        email: this.currentUser?.email,
      });
    });
  }

  newPetHandler() {
    if (this.newPetForm.invalid) {
      return;
    }

    let {
      type,
      breed,
      name,
      image,
      gender,
      age,
      location,
      email,
      description,
      tel,
    } = this.newPetForm.value;

    this.petService.createPet$(
      type!,
      breed!,
      name!,
      image!,
      gender!,
      age!,
      location!,
      email!,
      description!,
      tel || undefined
    ).subscribe( () => this.router.navigate(['pets/dashboard']))

    console.log(this.newPetForm.value);
  }
}
