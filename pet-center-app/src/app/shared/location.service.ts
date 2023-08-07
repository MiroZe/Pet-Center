//SERVICE FOR DISTANCE CALCULATION

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, combineLatest, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LocationService {

  coutryCode = 'BG'

  constructor(private http: HttpClient) { }

  searchLocation$(query: string): Observable<any[]> {
    const nominatimUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(this.coutryCode + ', ' + query)}`;
    return this.http.get<any[]>(nominatimUrl);
  }

  // FUNCTION FROM DEGREE TO RADIANS CONVERSION
  private degreesToRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }

  // hAVERSIN FORMULA CALCULATION
  private calculateHaversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    
    
    const earthRadiusKm = 6371; // Earth radius in km
  
    // DEGREES TO RADIANS
    const lat1Rad = this.degreesToRadians(lat1);
    const lon1Rad = this.degreesToRadians(lon1);
    const lat2Rad = this.degreesToRadians(lat2);
    const lon2Rad = this.degreesToRadians(lon2);
  
    // SUBTRACTION BETWEEN POINTS
    const deltaLat = lat2Rad - lat1Rad;
    const deltaLon = lon2Rad - lon1Rad;
  
    // HAVERSIN FORMULA IN ACTION
    const a =
      Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
      Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    const distance = earthRadiusKm * c;
    return distance;
  }

  // MAIN FUNCTION FOR DISTANCE CALCULATION
  getDistanceBetweenLocations$(address1: string, address2: string): Observable<number> {
    const searchLocation1$ = this.searchLocation$(address1);
    const searchLocation2$ = this.searchLocation$(address2);

    return combineLatest([searchLocation1$, searchLocation2$]).pipe(
      map(([locations1, locations2]) => {
      
       
        //TAKING THE FIRS RESULTS OF ARRAYS
        const lat1 = locations1[0]?.lat;
        const lon1 = locations1[0]?.lon;
        const lat2 = locations2[0]?.lat;
        const lon2 = locations2[0]?.lon;

        if (lat1 && lon1 && lat2 && lon2) {
          return Math.ceil(this.calculateHaversineDistance(lat1, lon1, lat2, lon2));
        } else {
          return 0; 
        }
      })
    );
  }
}