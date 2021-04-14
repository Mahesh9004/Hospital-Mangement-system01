import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';
import { Vaccine } from 'src/vaccine';
import { NavbarService } from 'src/app/services/navbar.service';


@Component({
  selector: 'app-vaccination',
  templateUrl: './vaccination.component.html',
  styleUrls: ['./vaccination.component.css']
})
export class VaccinationComponent implements OnInit {

  result: String;
  vaccine = new Vaccine();
  
  
  constructor(private _service: RegistrationService, private _router: Router, public nav: NavbarService) { }

  ngOnInit(): void {
    this.nav.show();
    this.vaccine.patientId = +sessionStorage.getItem('id');
    this.vaccine.patientName = sessionStorage.getItem('name');


  }


  checkVaccineAppointment() {
  
    this._service.registerVaccineAppointment(this.vaccine).subscribe(
      data => {
       // this.result = this._service.confirmAppointment();
       this.confirmationAppointment();
        console.log('response received');
        this._router.navigate(['/confirmvaccination']);
      },
      error => {
        console.log('exception occurred');
        alert('You already have an appointment on this date ! please select any other date to proceed further.');
        //this.msg= error.error;

      }
    );



    
  }


  confirmationAppointment(){
    this._service.confirmAppointment(this.vaccine)
        .subscribe(
          res => this.result = res,
        );
       
  }

}
