import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { RegistrationService } from 'src/app/services/registration.service';
import { User } from 'src/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User(); 
  msg = '';
  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data =>{
        console.log("response received");
        this._router.navigate(['/home'])
      },
      error => {console.log("exception occurred")
      this.msg="Bad Credentials, please enter valid email id and password!";
    }
    )
    
  }

  

}
