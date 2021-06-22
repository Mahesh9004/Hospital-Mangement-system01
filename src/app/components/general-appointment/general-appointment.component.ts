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
  public q1:any;
  public q2:any;
  public q3:any;
  public q4:any;
  public currentDate: any;
  public currentId: any;
  
  msg='';
  minDate:Date;
  constructor(private _router: Router, private _service: RegistrationService,  public nav: NavbarService) { 
    this.flag = false;
  }

  
  ngOnInit(): void {
    

    //this.nav.show();
    this.nav.showPatient();
    this.checkAlreadyTaken();
    
    this.general.userName = sessionStorage.getItem('name');
    
    this.general.patientId = +sessionStorage.getItem('id');
    this.minDate = new Date();
  }

  onSubmit(){
    alert('Questionnaire Done successfully !!');
    this._router.navigate(['home']);
  }


  checkAlreadyTaken() : boolean{
    this._service.getTestAppointmentInfo(+sessionStorage.getItem('id')).subscribe((data: General[])=>{
      console.log(data);
      this.gen = data;
      this.flag =true;

      if(this.gen.length != 0){
        alert("You have already taken the appointment !!")
        this.flag =false;
        this._router.navigate(['/home']);
      }
    })
    return this.flag;
  
  }
 
  saveAppointment(){
  //  this.flag =  this.checkAlreadyTaken();
   console.log(this.flag);
    if(this.flag){
      this.general.status = "Pending"
      this._service.generalAppointmentFromRemote(this.general).subscribe(
      data=>{
        console.log('appointment received');


        sessionStorage.setItem('drycough',this.general.dryCough);
        this.q1 = sessionStorage.getItem('drycough');
        //console.log(this.q1);

        sessionStorage.setItem('fever',this.general.fever);
        this.q2 = sessionStorage.getItem('fever');
        //console.log(this.q2);

        sessionStorage.setItem('lossoftaste',this.general.lossOfTaste);
        this.q3 = sessionStorage.getItem('lossoftaste');
        //console.log(this.q3);

        sessionStorage.setItem('breath',this.general.breath);
        this.q4 = sessionStorage.getItem('breath');
        //console.log(this.q4);

        sessionStorage.setItem('date',this.general.appointmentDate);
        this.currentDate = sessionStorage.getItem('date');

        
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
