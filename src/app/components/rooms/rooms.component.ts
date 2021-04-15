import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from 'src/app/bill';
import { General } from 'src/app/general';
import { RegistrationService } from 'src/app/services/registration.service';
import { Room } from '../room';
import { RoomManagement } from '../roomManagement';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  roomManagement =new RoomManagement();
  room = new Room();
  flag:boolean;
  roomCheck:RoomManagement[];
  rooms:Room[];
  roomsNo:Room[];
  gen : General[];
  addroom:boolean;
  bedalottment:boolean;
  delroom:boolean;
  constructor(private _service: RegistrationService, private _router: Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.addroom =false;
    this.bedalottment =true;
    this.delroom =false;


    this._service.getRoomInfo().subscribe((data: Room[])=>{
      console.log(data);
      this.rooms = data;
    })
  }

  bedalot(){
    this.addroom =false;
    this.bedalottment =true;
    this.delroom =false;
  }
  addNewRoom(){
    this.addroom =true;
    this.bedalottment =false;
    this.delroom =false;
  }
  deleteRoom(){
    this.addroom =false;
    this.bedalottment =false;
    this.delroom =true;
  }


  getName(event){
    console.log(event.target.value);
    this._service.getTestAppointmentInfo(+event.target.value).subscribe((data: General[])=>{
      this.gen = data;
    })
  }

  getTypes(event){
    console.log(event.target.value);
    this._service.getRoomNumbers(event.target.value).subscribe((data: Room[])=>{
      console.log(data);
      this.roomsNo = data;
    })
  
  }
  getAvailableRooms(event){
    console.log(event.target.value);
    this.roomManagement.roomNo = +event.target.value;
  }
  
  checkAlreadyTaken(){
    this._service.GetRoomInfoByPid(+this.roomManagement.patientId).subscribe((data: RoomManagement[])=>{
      this.roomCheck = data;
      console.log("Inner"+this.roomCheck);
      this.flag =true;
      console.log("Outer"+this.roomCheck);
      
      if(this.roomCheck.length != 0){
        alert("You have already admitted !!")
        this.flag = false;
       // this._router.navigate(['/home']);
      }
    })

   
  }
  
  confirmBed(){
    this.checkAlreadyTaken();
    this.roomManagement.admitDate = new Date();
    if(this.flag){
    this._service.confirmBedAlloted(this.roomManagement).subscribe((data: RoomManagement)=>{
      console.log(data);
     // this.bill = data;
    })}
  }
  cancelBed(){
    this._router.navigate(['/home']);
  }

  confirmAddRoom(){
    this.room.status="Available"
    this._service.confirmAddRoom(this.room).subscribe((data: Room)=>{
      console.log(data);
     // this.bill = data;
    })
    this._router.navigate(['/home']);
  }

  deleteBed(id:Number){
    console.log(id);
    this.http.delete('http://localhost:8080/deleteBed/'+id)
          .subscribe(() =>  {
            alert('Room No: '+id+' is deleted');
          })
  }

}
