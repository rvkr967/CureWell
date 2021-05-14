import { Component, OnInit } from '@angular/core';
import { IDoctor } from '../curewell-interfaces/IDoctor';


@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  static docId: number = 1001;
  docList: IDoctor[] = [];
  constructor() { }

  ngOnInit() {
  }
  addDoctor(name: string) {
    let v: IDoctor = { DoctorId: AddDoctorComponent.docId, DoctorName: name }
    this.docList.push(v);
    AddDoctorComponent.docId++;
    console.log(this.docList)
  }

}
