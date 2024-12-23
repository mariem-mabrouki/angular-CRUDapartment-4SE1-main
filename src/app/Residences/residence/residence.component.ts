import { Component, OnInit } from '@angular/core';
import { Residence } from 'src/app/core/models/residence';
import { ResidenceService } from 'src/app/core/service/residence.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent implements OnInit {

  searchItem = "";
  listResidences: Residence[] = [];
  listFavoris: Residence[] = [];
  visiblity = false;
  vv!: string;

  constructor(private residenceService: ResidenceService) { }

  ngOnInit() {
    this.residenceService.getresidences().subscribe(data => {
      this.listResidences = data;
    });
  }

  showLocation(r: Residence) {
    if (r.address === "inconnu") {
      alert('Adresse inconnue');
    } else {
      this.visiblity = true;
      this.vv = r.name;
    }
  }

  addFavoris(r: Residence) {
    if (this.listFavoris.includes(r)) {
      alert('Already liked');
    } else {
      this.listFavoris.push(r);
    }
  }

  confirmDelete(id: number) {
    if (confirm('Are you sure you want to delete this residence?')) {
      this.onDeleteResidence(id);
    }
  }
  onDeleteResidence(id: number) {
    this.residenceService.deleteResidence(id).subscribe(() => {
      alert('Residence deleted successfully');
      this.getResidences();
    });
  }
  getResidences() {
    this.residenceService.getresidences().subscribe(data => {
      this.listResidences = data;
    });
  }
}
