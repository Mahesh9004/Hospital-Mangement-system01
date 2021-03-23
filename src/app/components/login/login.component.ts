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
  public uemail:any;
  public uid:any;
  public uname:any;
  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data =>{
        console.log("response received");
        this._router.navigate(['/home'])

        console.log("response recieved");
        this._router.navigate(['/home']);


        sessionStorage.setItem('email',this.user.emailId);
        this.uemail = sessionStorage.getItem('email');
        console.log(this.uemail);

        sessionStorage.setItem('id',data.id);
        this.uid= sessionStorage.getItem('id');
        console.log(this.uid);

        sessionStorage.setItem('name',data.userName);
        this.uname= sessionStorage.getItem('name');
        console.log(this.uname);

      },
      error => {console.log("exception occurred")
      this.msg="Bad Credentials, please enter valid email id and password!";
    }
    )
    
  }

  

}
