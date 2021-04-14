import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { RegistrationService } from 'src/app/services/registration.service';
import { General } from 'src/app/general';
import { NgForm } from '@angular/forms';
import { NavbarService } from 'src/app/services/navbar.service';


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
  gen: General[];
  flag:boolean;
  msg='';
  minDate:Date;
  constructor(private _router: Router, private _service: RegistrationService,  public nav: NavbarService) { }

  
  ngOnInit(): void {
    
    this.nav.show();
    this.general.userName = sessionStorage.getItem('name');
    this.general.patientId = +sessionStorage.getItem('id');
    this.minDate = new Date();
  }

  onSubmit(){
    alert('Questionnaire Done successfully !!');
    this._router.navigate(['home']);
  }


  checkAlreadyTaken(){
    this._service.getTestAppointmentInfo(+sessionStorage.getItem('id')).subscribe((data: General[])=>{
      console.log(data);
      this.gen = data;
    })

    this.flag =true;

    if(this.gen.length != 0){
      alert("You have already taken the appointment !!")
      this.flag =false;
      this._router.navigate(['/home']);
    }
  }

  saveAppointment(){
    this.checkAlreadyTaken();
    if(this.flag){
      this.general.status = "Pending"
      this._service.generalAppointmentFromRemote(this.general).subscribe(
      data=>{
        console.log('appointment received');
        
        this._router.navigate(['/confirmation']);
      },
      error=>{
        console.log('exception occurred');
        this.msg= error.error;
        
      }
    )
  }
  }


}
