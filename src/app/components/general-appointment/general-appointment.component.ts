import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-general-appointment',
  templateUrl: './general-appointment.component.html',
  styleUrls: ['./general-appointment.component.css']
})
export class GeneralAppointmentComponent implements OnInit {

  yes = false;
  no = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    alert('Questionnaire Done successfully !!');
    this.router.navigate(['home']);
  }
}
