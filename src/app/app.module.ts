import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CountriesComponent } from './components/countries/countries.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { VaccinationComponent } from './components/vaccination/vaccination.component';
import { GeneralAppointmentComponent } from './components/general-appointment/general-appointment.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { PendingAppointmentComponent } from './components/pending-appointment/pending-appointment.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { DoctorloginComponent } from './components/doctorlogin/doctorlogin.component';
import { DoctorregistrationComponent } from './components/doctorregistration/doctorregistration.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { BillComponent } from './components/bill/bill.component';
import { PatientHistoryComponent } from './components/patient-history/patient-history.component';
import { PendingVaccinationAppointmentComponent } from './components/pending-vaccination-appointment/pending-vaccination-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CountriesComponent,
    HomeComponent,
    NavbarComponent,
    DashboardCardComponent,
    VaccinationComponent,
    GeneralAppointmentComponent,
    LoginComponent,
    RegistrationComponent,
    PendingAppointmentComponent,
    UserProfileComponent,
    InvoiceComponent,
    DoctorloginComponent,
    DoctorregistrationComponent,
    AdminloginComponent,
    BillComponent,
    PatientHistoryComponent,
    PendingVaccinationAppointmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule,
    FormsModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
