import { Component, OnInit } from '@angular/core';
import { IDoctor } from '../curewell-interfaces/IDoctor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})
export class ViewDoctorComponent implements OnInit {
  doctors: IDoctor[] = [{ DoctorId: 1001, DoctorName: 'Albert' },
  { DoctorId: 1002, DoctorName: 'Olivia' }, { DoctorId: 1003, DoctorName:'Susan' }]

  constructor(private router: Router) { }

  ngOnInit() {
  }
  updateDoctor(doc: IDoctor) {
    this.router.navigate(['/updateDoctor', doc.DoctorId, doc.DoctorName])
  }

}
