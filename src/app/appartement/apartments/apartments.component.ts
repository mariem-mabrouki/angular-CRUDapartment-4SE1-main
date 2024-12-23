import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apartment } from 'src/app/core/models/appartement';
import { AppartementService } from 'src/app/core/service/appartement.service'; 
@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {

  listApartments: Apartment[] = [];  
  residences = [
    { id: 1, name: 'El fel' },
    { id: 2, name: 'El yasmine' },
    { id: 3, name: 'El Arij' },
    { id: 4, name: 'El Anber' }
  ];

  constructor(private apartmentService: AppartementService,private router: Router ) {}

  ngOnInit(): void {
    this.apartmentService.getApartments().subscribe((data: Apartment[]) => {
      this.listApartments = data;
    });
  }
  loadApartments(): void {
    this.apartmentService.getApartments().subscribe(data => {
      this.listApartments = data; 
    });
  }
  getResidenceName(id: number): string {
    const residence = this.residences.find(res => res.id === id);
    return residence ? residence.name : '';
  }
  editApartment(apartmentId: number): void {
    this.router.navigate(['/editApartment', apartmentId]);  
  }

  deleteApartment(apartmentId: number): void {
    if (confirm('Are you sure you want to delete this apartment?')) {
      this.apartmentService.deleteApartment(apartmentId).subscribe(() => {
        alert('Apartment deleted successfully');
        this.loadApartments(); 
      });
    }
  }
}
