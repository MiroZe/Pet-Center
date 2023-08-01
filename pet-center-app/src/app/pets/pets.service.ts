import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPet } from '../interfaces/pet';
import { BehaviorSubject, Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class PetsService {
  constructor(private http: HttpClient) {}


  private pet$$: BehaviorSubject<IPet | undefined> = new BehaviorSubject<IPet | undefined>(undefined);
  pet$ = this.pet$$.asObservable;
  




  loadAllPets$(petType: string = ''): Observable<IPet[]> {
    return this.http.get<IPet[]>('/api/pets');
  }

   loadByType$(petType: string = ''): Observable<IPet[]> {
     return this.http.get<IPet[]>(`/api/pets?type=${petType}`)
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
    description: string,
    tel?: string
  ): Observable<IPet> {
    return this.http.post<IPet>(
      '/api/pets/create',
      {
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
      },
      { withCredentials: true }
    );
  }

  getOnePet$(petId: string): Observable<IPet> {
    return this.http.get<IPet>(`/api/pets/${petId}`).pipe(
      tap(pet => this.pet$$.next(pet))
    )
     
  }

  editPet$(
    petId: string,
    type: string,
    breed: string,
    name: string,
    image: string,
    age: string,
    gender: string,
    location: string,
    email: string,
    description: string,
    tel?: string
  ): Observable<IPet> {
    return this.http.put<IPet>(
      `/api/pets/${petId}/edit`, 
      { type,breed,name,image,age,gender,location,email,description,tel },
      { withCredentials: true }
    );
  }



deletePet$(petId:string) {
  return this.http.delete(`/api/pets/${petId}/delete`, { withCredentials: true })

}

getMyPets$(): Observable<IPet[]> {
  return this.http.get<IPet[]>('/api/pets/myPets');
}

getMyFavorites$(){
  return this.http.get('/api/pets/my-favorites')
}


}
