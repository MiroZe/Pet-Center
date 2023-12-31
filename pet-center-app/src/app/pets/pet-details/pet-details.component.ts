import { Component,  OnInit } from '@angular/core';
import { PetsService } from '../pets.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject, EMPTY, switchMap } from 'rxjs';
import { IPet } from 'src/app/interfaces/pet';
import { IUser } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/auth/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { IMAGE_PATTERN } from 'src/app/constants';
import { DialogConfirmationService } from 'src/app/shared/dialog-confirmation.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css'],
})
export class PetDetailsComponent implements OnInit {
  pet!: IPet;
  isOwner: boolean = false;
  currentUser: IUser | undefined;
  isInEditMode: boolean = false;
  currentPetId!: string;
  private pet$$  = new BehaviorSubject<IPet | undefined>(undefined);
  pet$ = this.pet$$.asObservable();
  isAlreadySave:boolean | undefined ;
  userLocation!: string |undefined
  petLocation! : string;
  ownerId! : string
  isInMessageMode : boolean = false
  
  
  constructor(
    private petService: PetsService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private fb: FormBuilder,
    private router:Router,
    private dialogConfirmationService : DialogConfirmationService
   
  ) {}
  

  ngOnInit() {
    this.authService.user$.subscribe((user) => (this.currentUser = user));
    this.userLocation = this.currentUser?.location
    
    
    
    
    

    this.activatedRoute.params.pipe(
      switchMap((params: Params) => {
        const petId = params['petId'];
        this.currentPetId = petId;
        this.isAlreadySave = this.currentUser?.favorites.includes(this.currentPetId);
        
        
        return this.petService.getOnePet$(petId);
      })
    ).subscribe((currentPet)=> {
      this.pet$$.next(currentPet)
      
      this.petLocation = currentPet.location
      
      this.pet = currentPet;
      this.ownerId = currentPet.owner._id
      this.isOwner = currentPet.owner._id === this.currentUser?._id;
    })


  }

  

  editPetForm = this.fb.group({
    type: ['', [Validators.required]],
    breed: ['', [Validators.required, Validators.minLength(3)]],
    name: ['', [Validators.required]],
    image: ['', [Validators.required, Validators.pattern(IMAGE_PATTERN)]],
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

  toggle() {
    this.isInEditMode = !this.isInEditMode;
  }

  switchToEdit() {
    const ageToStr: string = this.pet.age.toString();

    this.editPetForm.patchValue({
      type: this.pet.type,
      breed: this.pet.breed,
      name: this.pet.name,
      image: this.pet.image,
      age: ageToStr,
      gender: this.pet.gender,
      location: this.pet.location,
      tel: this.pet.tel,
      email: this.pet.email,
      description: this.pet.description,
    });

   this.toggle()
  }

  editPetHandler() {
    if (this.editPetForm.invalid) {
      return;
    }
    const {
      type,
      breed,
      name,
      image,
      age,
      gender,
      location,
      email,
      description,
      tel,
    } = this.editPetForm.value;

    this.petService.editPet$(
      this.currentPetId,
      type!,
      breed!,
      name!,
      image!,
      age!,
      gender!,
      location!,
      email!,
      description!,
      tel || undefined
    ).pipe(
      switchMap(() => this.petService.getOnePet$(this.currentPetId))
    ).subscribe((currentPet) => {
      this.pet$$.next(currentPet)
      this.pet = currentPet
      this.toggle()
     
    });
  }


  deleteItem(action: string) {
    this.dialogConfirmationService.openDialog(action).pipe(
      switchMap(result => {
        if (result) {
          return this.petService.deletePet$(this.currentPetId);
        } else {
          return EMPTY; // Връщаме празен Observable, за да не продължаваме към следващата операция
        }
      })
    ).subscribe(() => {
      
      
      this.router.navigate(['/pets/dashboard']);
    });
  }

 
  addToFavorites() {
   
    this.authService.addPetToFavorites$(this.currentPetId).subscribe( ()=> {
      if(!this.isAlreadySave) {
        this.isAlreadySave = true

      }
    })
     
    
  }


  enterInMessageMode( value: boolean) {
    this.isInMessageMode = value
  }


}




