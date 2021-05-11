import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationService } from 'src/app/services/registration.service';
import { User } from 'src/user';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  users : User[];
  p : number = 1;

  constructor(private _service: RegistrationService, private http: HttpClient, public nav: NavbarService) { }

  ngOnInit(): void {
          this.nav.hide();
          this.nav.showAdmin();
          
          this._service.allPatient().subscribe((data: User[])=>{
          this.users = data;
    })
  }

}
