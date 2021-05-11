import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationService } from 'src/app/services/registration.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { Doctor } from 'src/doctor';

@Component({
  selector: 'app-alldoctor',
  templateUrl: './alldoctor.component.html',
  styleUrls: ['./alldoctor.component.css']
})
export class AlldoctorComponent implements OnInit {

  doctors : Doctor[];
  p : number = 1;
  constructor(private _service: RegistrationService, private http: HttpClient, public nav: NavbarService) { }

  ngOnInit(): void {
          this.nav.showAdmin();
          this._service.allDoctor().subscribe((data: Doctor[])=>{
          this.doctors = data;
    })
  }

}
