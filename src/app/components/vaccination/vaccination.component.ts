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
  v: Vaccine[];
  flag:boolean;
  minDate:Date;
  
  
  constructor(private _service: RegistrationService, private _router: Router, public nav: NavbarService) { }

  ngOnInit(): void {
    //this.nav.show();
    this.nav.showPatient();
    
    this.checkAlreadyTaken();
    this.vaccine.patientId = +sessionStorage.getItem('id');
    this.vaccine.patientName = sessionStorage.getItem('name');

    //this.minDate = this.minDate.setDate(new Date(), 'yyyy-MM-dd');
    //this.minDate = new Date().toISOString().split('T')[0];
    this.minDate = new Date();
    console.log(this.minDate)
  }

  checkAlreadyTaken() : boolean{
      this._service.getVaccineAppointmentInfo(+sessionStorage.getItem('id')).subscribe((data: Vaccine[])=>{
      console.log(data);
      this.v = data;

      this.flag =true;
    
      if(this.v.length != 0){
        alert("You have already taken the appointment !!")
        this.flag = false;
        this._router.navigate(['/home']);
        
      }
    })
    return this.flag;
  }


  checkVaccineAppointment() {
    //this.flag = this.checkAlreadyTaken();
    
    if(this.flag){
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
}

  
  confirmationAppointment(){
    this._service.confirmAppointment(this.vaccine)
        .subscribe(
          res => this.result = res,
        );
       
  }

}
