import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Apartment } from 'src/app/core/models/appartement';
import { Residence } from 'src/app/core/models/residence';
import { AppartementService } from 'src/app/core/service/appartement.service';

@Component({
  selector: 'app-add-appartment',
  templateUrl: './add-appartment.component.html',
  styleUrls: ['./add-appartment.component.css']
})
export class AddAppartmentComponent {
  apartForm: FormGroup;
  residences: Residence[] = [
    { id: 1, name: 'El fel', address: 'Borj Cedria', image: '../../assets/images/R1.jpg', status: 'Disponible' },
    { id: 2, name: 'El yasmine', address: 'Ezzahra', image: '../../assets/images/R2.jpeg', status: 'Disponible' },
    { id: 3, name: 'El Arij', address: 'Rades', image: '../../assets/images/R3.jpg', status: 'Vendu' },
    { id: 4, name: 'El Anber', address: 'Inconnu', image: '../../assets/images/R4.jpg', status: 'En Construction' }
  ];

  constructor(private fb: FormBuilder, private apartmentService: AppartementService,private router: Router) {
    this.apartForm = this.fb.group({
      apartNum: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      floorNum: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      surface: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      terrace: ['yes', Validators.required],
      surfaceTerrace: [{ value: '', disabled: true }, [Validators.pattern('^[0-9]+$')]],
      category: ['S+1', Validators.required],
      residence: ['', Validators.required]
    });

    this.apartForm.get('terrace')?.valueChanges.subscribe((value) => {
      const surfaceTerraceControl = this.apartForm.get('surfaceTerrace');
      if (value === 'yes') {
        surfaceTerraceControl?.enable();
      } else {
        surfaceTerraceControl?.disable();
        surfaceTerraceControl?.reset();
      }
    });
  }

  savaApartment() {
    if (this.apartForm.valid) {
      const newApart: Apartment = { ...this.apartForm.getRawValue() };

      this.apartmentService.addApartment(newApart).subscribe({
        next: (response) => {
          console.log('Apartment added successfully:', response);
          alert('Apartment successfully added!');
          this.onReset();
        },
        error: (error) => {
          console.error('Error adding apartment:', error);
          alert('Failed to add apartment. Please try again.');
        }
      });
    } else {
      console.log('Form is invalid:', this.apartForm.errors);
      alert('Please fill all required fields correctly.');
    }
    this.router.navigate(['/appart']);
  }

  onReset() {
    this.apartForm.reset({
      terrace: 'yes',
      category: 'S+1'
    });
  }
}
