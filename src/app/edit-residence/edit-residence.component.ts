import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from 'src/app/core/service/residence.service';
import { Residence } from 'src/app/core/models/residence';

@Component({
  selector: 'app-edit-residence',
  templateUrl: './edit-residence.component.html',
  styleUrls: ['./edit-residence.component.css']
})
export class EditResidenceComponent implements OnInit {

  residenceForm!: FormGroup;
  residenceId!: number;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private residenceService: ResidenceService
  ) { }

  ngOnInit(): void {
    this.residenceId = +this.route.snapshot.paramMap.get('id')!;
    this.residenceService.getResidenceById(this.residenceId).subscribe(data => {
      this.residenceForm = this.fb.group({
        name: [data.name, [Validators.required, Validators.minLength(3)]],
        address: [data.address, Validators.required],
        image: [data.image, Validators.required],
        status: [data.status, Validators.required]
      });
      console.log(this.residenceForm);
      
    });
  }
  updateResidence(): void {
    if (this.residenceForm.valid) {
      const updatedResidence: Residence = {
        id: this.residenceId,
        name: this.residenceForm.value.name,
        address: this.residenceForm.value.address,
        image: this.residenceForm.value.image,
        status: this.residenceForm.value.status
      };

      this.residenceService.updateResidence(updatedResidence).subscribe(() => {
        alert('Residence updated successfully');
        this.router.navigate(['/residence']);
      });
    }
  }

  get name() { return this.residenceForm.get('name'); }
  get address() { return this.residenceForm.get('address'); }
  get image() { return this.residenceForm.get('image'); }
  get status() { return this.residenceForm.get('status'); }
}
