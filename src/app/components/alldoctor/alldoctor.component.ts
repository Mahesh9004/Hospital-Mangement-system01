import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationService } from 'src/app/services/registration.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { Doctor } from 'src/doctor';
import { Inewdoctor } from 'src/app/inewdoctor';
import { NewdoctorresgisterService } from 'src/app/services/newdoctorresgister.service';

@Component({
  selector: 'app-alldoctor',
  templateUrl: './alldoctor.component.html',
  styleUrls: ['./alldoctor.component.css']
})
export class AlldoctorComponent implements OnInit {

  doctor!:Inewdoctor[];
  constructor( private getAllDoctor:NewdoctorresgisterService) { }

  ngOnInit(): void {
    this.getAllDoctor.getAlldoctor().subscribe(skills=>{
      this.doctor=skills;
    })
  }
}