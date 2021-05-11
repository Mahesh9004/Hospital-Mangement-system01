import { Component, OnInit } from '@angular/core';
import { Vaccine } from 'src/vaccine';
import {  RegistrationService } from 'src/app/services/registration.service';
import { NavbarService } from 'src/app/services/navbar.service';


@Component({
  selector: 'app-pending-vaccination-appointment',
  templateUrl: './pending-vaccination-appointment.component.html',
  styleUrls: ['./pending-vaccination-appointment.component.css']
})
export class PendingVaccinationAppointmentComponent implements OnInit {

  vaccine : Vaccine[];
  p : number = 1;
  constructor(private _service: RegistrationService, public nav: NavbarService) { }

  ngOnInit(): void {
    this.nav.hide();
    this.nav.showDoctor();
    
    this._service.vaccinePendingAppointments().subscribe((data: Vaccine[])=>{
      console.log(data);
      this.vaccine = data;
  })
  }

}
