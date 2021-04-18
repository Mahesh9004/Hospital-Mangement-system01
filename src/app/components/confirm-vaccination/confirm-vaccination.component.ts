import { Component, OnInit } from '@angular/core';
import { Vaccine } from 'src/vaccine';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';



@Component({
  selector: 'app-confirm-vaccination',
  templateUrl: './confirm-vaccination.component.html',
  styleUrls: ['./confirm-vaccination.component.css']
})
export class ConfirmVaccinationComponent implements OnInit {

  vaccine = new Vaccine();
  currentName: any;
  
  constructor(private _router: Router, public nav: NavbarService) { }


  ngOnInit(): void {
    this.nav.show();
    this.currentName = sessionStorage.getItem('name');
  }
  
  confirmApp(){
    this._router.navigate(['/home']);
  }
}
