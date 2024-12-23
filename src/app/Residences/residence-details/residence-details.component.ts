import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent {
  residenceId: any
  constructor( private activatedroute : ActivatedRoute) { }
  ngOnInit(): void {
    this.residenceId = this.activatedroute.snapshot.paramMap.get('id');

  }


}
