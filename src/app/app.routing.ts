import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { ViewSpecializationComponent } from './view-specialization/view-specialization.component';
import { ViewTodaysSurgeryComponent } from './view-todays-surgery/view-todays-surgery.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { UpdateSurgeryComponent } from './update-surgery/update-surgery.component';

const routes: Routes = [
  { path: '', component: ViewDoctorComponent },
  { path: 'viewDoctors', component: ViewDoctorComponent },
  { path: 'viewSpecializations', component: ViewSpecializationComponent },
  { path: 'viewSurgeries', component: ViewTodaysSurgeryComponent },
  { path: 'addDoctor', component: AddDoctorComponent },
  { path: 'updateDoctor/:DoctorId/:DoctorName', component: UpdateDoctorComponent },
  { path: 'updateSurgery', component: UpdateSurgeryComponent },
  { path: '**', redirectTo: '', pathMatch:'full' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
