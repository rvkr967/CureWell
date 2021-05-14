import { Component, OnInit } from '@angular/core';
import { ISpecialization } from '../curewell-interfaces/ISpecialization';

@Component({
  selector: 'app-view-specialization',
  templateUrl: './view-specialization.component.html',
  styleUrls: ['./view-specialization.component.css']
})
export class ViewSpecializationComponent implements OnInit {
  specializations: ISpecialization[] = [{ SpecializationCode: 'ANE', SpecializationName: 'Anesthesiologist' },
  { SpecializationCode: 'CAR', SpecializationName: 'Cardiologist' }, { SpecializationCode: 'GYN', SpecializationName:'Gynecologist' }]
  constructor() { }

  ngOnInit() {
  }

}
