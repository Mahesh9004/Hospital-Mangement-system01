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


const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'countries', component: CountriesComponent},
  {path: 'vaccination', component: VaccinationComponent},
  {path: 'general-appointment', component: GeneralAppointmentComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'registration' , component: RegistrationComponent},
  {path: 'pending-appointment', component: PendingAppointmentComponent},
  {path: 'userprofile', component: UserProfileComponent},
  {path: 'invoice', component: InvoiceComponent},
  {path: '' , component: LoginComponent},
  {path: 'registerdoctor', component: DoctorregistrationComponent},
  {path: 'logindoctor', component: DoctorloginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
