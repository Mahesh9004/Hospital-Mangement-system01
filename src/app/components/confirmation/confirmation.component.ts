import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  
  currentName: any;
  currentQ1: any;
  currentQ2: any;
  currentQ3: any;
  currentQ4: any;
  currentappointmentDate: any;
  currentsubmittedId: any;
  public uid: any;

  constructor(public nav: NavbarService, private http: HttpClient, private _router: Router) { }

  ngOnInit(): void {
    this.nav.show();
    this.currentName = sessionStorage.getItem('name');
    this.currentsubmittedId = sessionStorage.getItem('id');
    console.log('id from confirmation: '+this.currentsubmittedId);


    this.uid= sessionStorage.getItem('id');
    console.log(this.uid);

    this.currentQ1 = sessionStorage.getItem('drycough');
    this.currentQ2 = sessionStorage.getItem('fever');
    this.currentQ3 = sessionStorage.getItem('lossoftaste');
    this.currentQ4 = sessionStorage.getItem('breath');
    this.currentappointmentDate = sessionStorage.getItem('date');
  }


  cancelAppointment(id){
    
    this.http.delete('http://localhost:8080/cancelappointment/'+id)
            .subscribe(() =>  {
              alert(this.currentName+' Your Test Appointment Canceled Successfully. ');
              this._router.navigate(['/home']);
            })
    }
}
