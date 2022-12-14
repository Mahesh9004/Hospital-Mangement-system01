import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './components/countries/countries.component';
import { HomeComponent } from './components/home/home.component';
import { VaccinationComponent } from './components/vaccination/vaccination.component';
import { GeneralAppointmentComponent } from './components/general-appointment/general-appointment.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { PendingAppointmentComponent } from './components/pending-appointment/pending-appointment.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

import { InvoiceComponent } from './components/invoice/invoice.component';

import { DoctorregistrationComponent } from './components/doctorregistration/doctorregistration.component';
import { DoctorloginComponent } from './components/doctorlogin/doctorlogin.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { PatientHistoryComponent } from './components/patient-history/patient-history.component';
import { PendingVaccinationAppointmentComponent } from './components/pending-vaccination-appointment/pending-vaccination-appointment.component';
import { AllpatientComponent } from './components/allpatient/allpatient.component';
import { AlldoctorComponent } from './components/alldoctor/alldoctor.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ConfirmVaccinationComponent } from './components/confirm-vaccination/confirm-vaccination.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { RoomstatusComponent } from './components/roomstatus/roomstatus.component';
import { PatientsComponent } from './components/patients/patients.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'vaccination', component: VaccinationComponent },
  { path: 'general-appointment', component: GeneralAppointmentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'pending-appointment', component: PendingAppointmentComponent },
  { path: 'userprofile', component: UserProfileComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'registerdoctor', component: DoctorregistrationComponent },
  { path: 'logindoctor', component: DoctorloginComponent },
  { path: '', component: AdminloginComponent },
  { path: 'patienthistory', component: PatientHistoryComponent },
  { path: 'vaccinependingappointments', component: PendingVaccinationAppointmentComponent },
  { path: 'allpatient', component: AllpatientComponent },
  { path: 'alldoctor', component: AlldoctorComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'confirmvaccination', component: ConfirmVaccinationComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'room-status', component: RoomstatusComponent },
  { path: 'all-patients', component: PatientsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
