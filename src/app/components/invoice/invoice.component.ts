import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';
import { Bill } from 'src/app/bill';
import { NavbarService } from 'src/app/services/navbar.service';
import { User } from 'src/user';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  bill = new Bill();
  user : User;
  text : string;
  minDate:Date;
  constructor(private _service: RegistrationService,public nav: NavbarService ) { }

  ngOnInit(): void {
    
    //this.bill.patientId = +sessionStorage.getItem('id');
   
   this.nav.showAdmin();
   this.minDate = new Date();
  }
  
  printInfo(){
    console.log("In printinfo");
    window.print();
  }

  getName(event){
    console.log(event.target.value);
    this._service.patientAvailable(+event.target.value).subscribe((data: User)=>{
      this.user = data;
      console.log(this.user);

      if(!this.user){
        alert("Invalid patient ID");
        window.location.reload();
      }else{
        this.bill.patientName = this.user.userName;
      }
    })
  }

  saveBill(){
    this._service.saveBillFromRemote(this.bill).subscribe(
      data=>{
        this.text = "Invoice Response Saved Successfully !"
      },
      error=>{
        this.text = "Invoice Response Failed to Save !"
        
      }
    )
  }

}
