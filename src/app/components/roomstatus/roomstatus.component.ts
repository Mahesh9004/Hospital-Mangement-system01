import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { RegistrationService } from 'src/app/services/registration.service';
import { Room } from '../room';
import { RoomManagement } from '../roomManagement';


@Component({
  selector: 'app-roomstatus',
  templateUrl: './roomstatus.component.html',
  styleUrls: ['./roomstatus.component.css']
})
export class RoomstatusComponent implements OnInit {

  p : number = 1;

  room:Room[];
  roomMan:RoomManagement[];

  constructor(private _service: RegistrationService, private http: HttpClient, public nav: NavbarService) { }

  ngOnInit(): void {
    this.nav.show();
          this._service.getRoomInfo().subscribe((data: Room[])=>{
             this.room = data;
          })
          this._service.getRoomStatusInfo().subscribe((data: RoomManagement[])=>{
            this.roomMan = data;
         })

  }

  Discharge(id){
this.http.delete('http://localhost:8080/dischargePatient/'+id)
        .subscribe(() =>  {
          alert('Patient discharge from room no.  '+id);
        })
}


}
