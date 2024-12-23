import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Residence } from '../models/residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  constructor( private http: HttpClient) { }

  residenceUrl ='http://localhost:3000/residences';

  getresidences(){
    return this.http.get<Residence[]>(this.residenceUrl);
  }
  addResidence(residence: Residence){
    return this.http.post(this.residenceUrl, residence);
  }
  deleteResidence(id: number){
    return this.http.delete(`${this.residenceUrl}/${id}`);
  }
  getResidenceById(id: number): Observable<Residence> {
    return this.http.get<Residence>(`${this.residenceUrl}/${id}`);
  }

  updateResidence(residence: Residence): Observable<Residence> {
    return this.http.put<Residence>(`${this.residenceUrl}/${residence.id}`, residence);
  }
}
