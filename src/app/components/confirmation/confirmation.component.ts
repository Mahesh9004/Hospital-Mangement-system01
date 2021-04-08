import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  
  currentName: any;
  constructor(public nav: NavbarService) { }

  ngOnInit(): void {
    this.nav.show();
    this.currentName = sessionStorage.getItem('name');
  }

}
