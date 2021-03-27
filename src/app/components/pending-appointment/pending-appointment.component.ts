import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { General } from 'src/app/general';
import { RegistrationService } from 'src/app/services/registration.service';


@Component({
  selector: 'app-pending-appointment',
  templateUrl: './pending-appointment.component.html',
  styleUrls: ['./pending-appointment.component.css']
})
export class PendingAppointmentComponent implements OnInit {

  //general = new General();
  generalappointments : General[];
  
  constructor(private _service: RegistrationService, private http: HttpClient) {   }

  ngOnInit(): void {
    this._service.pendingAppointment().subscribe((data: General[])=>{
      console.log(data);
      this.generalappointments = data;
  })


  
  }


deleteRow(id){
    
this.http.delete('http://localhost:8080/deleteappointment/'+id)
        .subscribe(() =>  {
          alert('Appointment deleted for Patient With Id '+id);
        })
}

/*
    to delete from ui

    for(let i = 0; i < this.generalappointments.length; ++i){
        if (this.generalappointments[i].id === id) {
            this.generalappointments.splice(i,1);
        }
    }
*/

}