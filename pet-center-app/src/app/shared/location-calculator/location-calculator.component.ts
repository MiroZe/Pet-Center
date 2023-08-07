import { Component, Input } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-location-calculator',
  templateUrl: './location-calculator.component.html',
  styleUrls: ['./location-calculator.component.css']
})
export class LocationCalculatorComponent {


  constructor(private  locationService: LocationService){}
  
  @Input() userLocation :string | undefined
  @Input() petLocation! :string
  
  distance! : number 

  calculateDistance(userLocation: any , petLocation:string) {
    this.locationService
      .getDistanceBetweenLocations$(userLocation, petLocation)
      .subscribe((distance) => {
        this.distance = distance;
      });
  }



}
