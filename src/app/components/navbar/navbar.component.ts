import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentId:any;
  currentName:any;
  currentEmail:any;
  
  constructor() {}

  
  
  ngOnInit(): void {


    this.currentId = sessionStorage.getItem('id');

    this.currentName = sessionStorage.getItem('name');
   
    this.currentEmail = sessionStorage.getItem('email');

    //console.log('hello '+this.currentEmail);

    
    //this.currentName = localStorage.getItem('name');
    //console.log('hello '+this.currentName);



    //window.location.reload();
    //sessionStorage.removeItem('email');
  }
  
 

}
