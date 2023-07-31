import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PawsLoaderComponent } from './paws-loader/paws-loader.component';



@NgModule({
  declarations: [
    PawsLoaderComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    PawsLoaderComponent
  ]
})
export class SharedModule { }
