import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from 'src/app/bill';
import { General } from 'src/app/general';
import { RegistrationService } from 'src/app/services/registration.service';
import { Room } from '../room';
import { RoomManagement } from '../roomManagement';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  roomManagement =new RoomManagement();
  room = new Room();
  newRoom:Number;
  flag:boolean;
  roomCheck:RoomManagement[];
  rooms:Room[];
  roomsNo:Room[];
  gen : General[];
  addroom:boolean;
  bedalottment:boolean;
  delroom:boolean;
  constructor(private _service: RegistrationService, private _router: Router,private http: HttpClient, public nav: NavbarService) { }

  ngOnInit(): void {
    this.addroom =false;
    this.bedalottment =true;
    this.delroom =false;

    this.nav.show();
    
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
    //console.log("last room "+this.rooms[this.rooms.length-1].id);
    
    this.newRoom = (+this.rooms[this.rooms.length-1].id)+1;
    
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

      if(this.gen.length == 0){
        alert("Invalid patient ID");
        window.location.reload();
      }
    })
  }

  getTypes(event){
    console.log(event.target.value);
    this._service.getRoomNumbers(event.target.value).subscribe((data: Room[])=>{
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
      this.flag =true;
      
      if(this.roomCheck.length != 0){
        alert("You have already admitted !!")
        this.flag = false;
        window.location.reload();
       // this._router.navigate(['/home']);
      }
    })

   
  }
  
  confirmBed(){
    this.checkAlreadyTaken();
    this.roomManagement.admitDate = new Date();
    if(this.flag){
      this.roomManagement.patientName = this.gen[0].userName;
      this._service.confirmBedAlloted(this.roomManagement).subscribe((data: RoomManagement)=>{
        console.log(data);
      // this.bill = data;
      alert('Patient added successfully!');
     this._router.navigate(['/room-status']);
      })}
  }
  cancelBed(){
    this._router.navigate(['/home']);
  }

  confirmAddRoom(){
    this.room.status="Available"
    this._service.confirmAddRoom(this.room).subscribe((data: Room)=>{
      console.log(data);
      alert('Room added successfully!');
      this._router.navigate(['/room-status']);
     
     
    })
    
  }

  deleteBed(id:Number){
    console.log(id);
    this.http.delete('http://localhost:8080/deleteBed/'+id)
          .subscribe(() =>  {
            alert('Room No: '+id+' is deleted');
            this._router.navigate(['/room-status']);
          })
  }

}
