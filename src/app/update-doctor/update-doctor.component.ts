import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent implements OnInit {
  DoctorId: number;
  DoctorName: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.DoctorId = parseInt(this.route.snapshot.params['DoctorId']);
    this.DoctorName = this.route.snapshot.params['DoctorName'];
  }

}
