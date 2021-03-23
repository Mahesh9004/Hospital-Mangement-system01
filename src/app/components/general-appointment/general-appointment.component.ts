import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { RegistrationService } from 'src/app/services/registration.service';
import { General } from 'src/app/general';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-general-appointment',
  templateUrl: './general-appointment.component.html',
  styleUrls: ['./general-appointment.component.css']
})
export class GeneralAppointmentComponent implements OnInit {
  general = new General();
  yes = false;
  no = false;
  currentName:any;
  
  msg='';
  constructor(private _router: Router, private _service: RegistrationService) { }

  ngOnInit(): void {
    this.currentName = sessionStorage.getItem('name');
  }

  onSubmit(){
    alert('Questionnaire Done successfully !!');
    this._router.navigate(['home']);
  }



  saveAppointment(){
    this._service.generalAppointmentFromRemote(this.general).subscribe(
      data=>{
        console.log('appointment received');
        alert('Hello '+this.currentName+' Your Appointment is Booked!');
        this._router.navigate(['/home']);
      },
      error=>{
        console.log('exception occurred');
        this.msg= error.error;
        
      }
    )
  }


}
