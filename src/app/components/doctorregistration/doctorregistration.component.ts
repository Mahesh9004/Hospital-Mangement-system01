import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';
import { Doctor } from 'src/doctor';
import { Router } from '@angular/router';


@Component({
  selector: 'app-doctorregistration',
  templateUrl: './doctorregistration.component.html',
  styleUrls: ['./doctorregistration.component.css']
})
export class DoctorregistrationComponent implements OnInit {

  doctor = new Doctor();
  msg=" ";
  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }


  registerDoctor(){
    this._service.registerDoctorFromRemote(this.doctor).subscribe(
      data=>{
        console.log('Doctors response received');
        this._router.navigate(['/logindoctor']);
      },
      error=>{
        console.log('exception occurred');
        this.msg= error.error;
        
      }
    )
  }


}
