import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';
import { Bill } from 'src/app/bill';
import { NavbarService } from 'src/app/services/navbar.service';


@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent implements OnInit {

  bills : Bill[];
  p : number = 1;
  constructor(private _service: RegistrationService, public nav: NavbarService) { }

  ngOnInit(): void {
    
    this.nav.show();

    this._service.patientBillHistory().subscribe((data: Bill[])=>{
      console.log(data);
      this.bills = data;
  })
  }

}
