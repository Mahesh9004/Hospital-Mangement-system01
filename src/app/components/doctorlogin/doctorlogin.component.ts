import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';
import { NgForm } from '@angular/forms';
import { Doctor } from 'src/doctor';

@Component({
  selector: 'app-doctorlogin',
  templateUrl: './doctorlogin.component.html',
  styleUrls: ['./doctorlogin.component.css']
})
export class DoctorloginComponent implements OnInit {


  doctor = new Doctor();
  public demail:any;
  public did:any;
  public dname:any;
  public ddegree:any;
  msg=" ";
  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }



  loginDoctor(){
    this._service.loginDoctorFromRemote(this.doctor).subscribe(
      data =>{

        console.log("Doctor login response received");
        this._router.navigate(['/home']);


        sessionStorage.setItem('email',this.doctor.doctorEmail);
        this.demail = sessionStorage.getItem('email');
        console.log(this.demail);

        sessionStorage.setItem('id',data.id);
        this.did= sessionStorage.getItem('id');
        console.log(this.did);

        sessionStorage.setItem('name',data.doctorName);
        this.dname= sessionStorage.getItem('name');
        console.log(this.dname);

        sessionStorage.setItem('degree',data.doctorDegree);
        this.ddegree= sessionStorage.getItem('degree');
        console.log(this.ddegree);

      },
      error => {console.log("exception occurred")
      this.msg="Bad Credentials, please enter valid doctor email id and password!";
    }
    )
    
  }


}
