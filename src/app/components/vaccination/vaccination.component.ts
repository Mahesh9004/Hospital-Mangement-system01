import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';
import { Vaccine } from 'src/vaccine';

@Component({
  selector: 'app-vaccination',
  templateUrl: './vaccination.component.html',
  styleUrls: ['./vaccination.component.css']
})
export class VaccinationComponent implements OnInit {

  result: String;
  vaccine = new Vaccine();
  
  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
    this.vaccine.patientId = +sessionStorage.getItem('id');
  }

  checkVaccineAppointment() {
    this._service.registerVaccineAppointment(this.vaccine).subscribe(
      data => {
       // this.result = this._service.confirmAppointment();
       this.confirmationAppointment();
        console.log('response received');
        this._router.navigate(['/home']);
      },
      error => {
        console.log('exception occurred');
        //this.msg= error.error;

      }
    );



    
  }


  confirmationAppointment(){
    this._service.confirmAppointment(this.vaccine)
        .subscribe(
          res => this.result = res,
          error => alert("error")
        );
        alert("Hello" + this.result);
  }

}
