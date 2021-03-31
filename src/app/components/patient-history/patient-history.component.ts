import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';
import { Bill } from 'src/app/bill';

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent implements OnInit {

  bills : Bill[];
  constructor(private _service: RegistrationService) { }

  ngOnInit(): void {
    this._service.patientBillHistory().subscribe((data: Bill[])=>{
      console.log(data);
      this.bills = data;
  })
  }

}
