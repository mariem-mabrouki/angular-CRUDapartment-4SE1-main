import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Residence } from 'src/app/core/models/residence';
import { ResidenceService } from 'src/app/core/service/residence.service';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
  listResidences:Residence[]=[];
  constructor(private fb: FormBuilder,  private r :Router , private residenceService: ResidenceService) { }
  addResidenceForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    address: ['', Validators.required],
    image: ['',Validators.required],
    status: ['',Validators.required],
    Apartments: this.fb.array([ ])
  });


  get name() { return this.addResidenceForm.get('name'); }
  get address() { return this.addResidenceForm.get('address'); }
  get image() { return this.addResidenceForm.get('image'); }
  get status() { return this.addResidenceForm.get('status'); }
  get Apartments() { return this.addResidenceForm.get('Apartments') as FormArray; }




  SaveResidence(){
let newR :Residence={
  id:6,
  name:this.addResidenceForm.value.name || '',
  address:this.addResidenceForm.value.address || '',
  image:this.addResidenceForm.value.image || '',
  status:this.addResidenceForm.value.status || '',

}


    this.residenceService.addResidence( newR).subscribe(data => {
      alert('residence added');

  })
  
  this.r.navigate(['/residence']);
};}
