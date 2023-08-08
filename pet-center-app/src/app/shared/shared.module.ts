import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PawsLoaderComponent } from './paws-loader/paws-loader.component';
import { DogLoaderComponent } from './dog-loader/dog-loader.component';
import { LocationCalculatorComponent } from './location-calculator/location-calculator.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { MaterialModule } from '../app.module';




@NgModule({
  declarations: [
    PawsLoaderComponent,
    DogLoaderComponent,
    LocationCalculatorComponent,
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
    
    
    
  ], exports: [
    PawsLoaderComponent,
    DogLoaderComponent,
    LocationCalculatorComponent
  ]
})
export class SharedModule { }
