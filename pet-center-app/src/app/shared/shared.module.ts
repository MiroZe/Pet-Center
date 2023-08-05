import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PawsLoaderComponent } from './paws-loader/paws-loader.component';
import { DogLoaderComponent } from './dog-loader/dog-loader.component';



@NgModule({
  declarations: [
    PawsLoaderComponent,
    DogLoaderComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    PawsLoaderComponent,
    DogLoaderComponent
  ]
})
export class SharedModule { }
