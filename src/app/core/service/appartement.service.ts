import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Apartment } from '../models/appartement';

@Injectable({
  providedIn: 'root'
})
export class AppartementService {
  

  constructor(private http: HttpClient) { }

  apartmentUrl = 'http://localhost:3000/apartments';

  getApartments() {
    return this.http.get<Apartment[]>(this.apartmentUrl);
  }
  addApartment(apartment: Apartment) {
    return this.http.post(this.apartmentUrl, apartment);
  }
  deleteApartment(id: number) {
    return this.http.delete(`${this.apartmentUrl}/${id}`);
  }
  getApartmentById(id: number): Observable<Apartment> {
    return this.http.get<Apartment>(`/api/apartments/${id}`);
  }
  
  updateApartment(updatedApartment: Apartment): Observable<Apartment> {
    return this.http.put<Apartment>(`/api/apartments/${updatedApartment.id}`, updatedApartment);
  }
}

