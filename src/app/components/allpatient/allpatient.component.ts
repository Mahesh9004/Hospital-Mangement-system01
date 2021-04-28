import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationService } from 'src/app/services/registration.service';
import { User } from 'src/user';
import { NavbarService } from 'src/app/services/navbar.service';




@Component({
  selector: 'app-allpatient',
  templateUrl: './allpatient.component.html',
  styleUrls: ['./allpatient.component.css']
})
export class AllpatientComponent implements OnInit {

  users : User[];
  p : number = 1;

  constructor(private _service: RegistrationService, private http: HttpClient, public nav: NavbarService) { }

  ngOnInit(): void {
          this.nav.show();
          
          this._service.allPatient().subscribe((data: User[])=>{
          this.users = data;
    })
  }

}
