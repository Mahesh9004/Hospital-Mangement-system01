import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {


  
  public email:any;
  public password:any;
  constructor( private _router: Router, public nav: NavbarService) { }

  ngOnInit(): void {
    
  }

  loginAdmin(){


      const email = 'admin@gmail.com'; //this.form.value.userName;
      const password = 'admin'; //this.form.value.passwd;
      if(email === 'admin@gmail.com' && password === 'admin'){
        console.log(email, password);
        this._router.navigate(['home']);
      } else{
        alert('Invalid Credentials!');
      }

      

      

      
    
  }

}
