import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PawsLoaderComponent } from './paws-loader/paws-loader.component';
import { DogLoaderComponent } from './dog-loader/dog-loader.component';
import { LocationCalculatorComponent } from './location-calculator/location-calculator.component';



@NgModule({
  declarations: [
    PawsLoaderComponent,
    DogLoaderComponent,
    LocationCalculatorComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    PawsLoaderComponent,
    DogLoaderComponent,
    LocationCalculatorComponent
  ]
})
export class SharedModule { }
