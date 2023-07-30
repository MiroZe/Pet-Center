import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPet } from '../interfaces/pet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PetsService {
  constructor(private http: HttpClient) {}

  loadAllPets$(): Observable<IPet[]> {
    return this.http.get<IPet[]>('/api/pets');
  }

  createPet$(
    type: string,
    breed: string,
    name: string,
    image: string,
    gender: string,
    age: string,
    location: string,
    email: string,
    description:string,
    tel?:string
  ): Observable<IPet> {
    return this.http.post<IPet>(
      '/api/pets/create',
      {type,breed,name,image,gender,age,location,email,description,tel},
      { withCredentials: true }
    );
  }

getOnePet(petId: string) :Observable <IPet> {
  return this.http.get<IPet>(`/api/pets/${petId}`)

}


}
