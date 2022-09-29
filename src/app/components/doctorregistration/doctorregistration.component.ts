import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';
import { Doctor } from 'src/doctor';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';
import { NewdoctorresgisterService } from 'src/app/services/newdoctorresgister.service';
import { Inewdoctor } from 'src/app/inewdoctor';



@Component({
  selector: 'app-doctorregistration',
  templateUrl: './doctorregistration.component.html',
  styleUrls: ['./doctorregistration.component.css']
})
export class DoctorregistrationComponent implements OnInit {

  
  emailid:FormControl=new FormControl("");
  doctorname:FormControl=new FormControl("");
  doctordegree:FormControl=new FormControl("");
  mobilenumber:FormControl=new FormControl("");
  dateofbirth:FormControl=new FormControl("");
  address:FormControl=new FormControl("");
  password:FormControl=new FormControl("");
  confirmpassword:FormControl=new FormControl("");
  registerServices: any;


  constructor( private newdoctorregister:NewdoctorresgisterService) { }

  ngOnInit(): void {
  }
    save(){
      let register:Inewdoctor={
        emailid: this.emailid.value,
        doctorname: this.doctorname.value,
        doctordegree: this.doctordegree.value,
        mobilenumber: this.mobilenumber.value,
        dateofbirth: this.dateofbirth.value,
        address:this.address.value,
        password: this.password.value,
        confirmpassword: this.confirmpassword.value
      };
      alert("Saved data")
      this.newdoctorregister.addRegister(register);
    }


}
