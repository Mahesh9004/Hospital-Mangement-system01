import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './components/countries/countries.component';
import { HomeComponent } from './components/home/home.component';
import { VaccinationComponent } from './components/vaccination/vaccination.component';
import { GeneralAppointmentComponent } from './components/general-appointment/general-appointment.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'countries', component: CountriesComponent},
  {path: 'vaccination', component: VaccinationComponent},
  {path: 'general-appointment', component: GeneralAppointmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
