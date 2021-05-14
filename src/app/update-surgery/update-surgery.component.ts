import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-update-surgery',
  templateUrl: './update-surgery.component.html',
  styleUrls: ['./update-surgery.component.css']
})
export class UpdateSurgeryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  updateSurgery(stt: number, ett: number) {
    console.log(stt+"         "+ett)
  }

}
