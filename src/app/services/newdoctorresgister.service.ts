import { Inject, Injectable } from '@angular/core';
import { Inewdoctor } from '../inewdoctor';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class NewdoctorresgisterService {

  constructor( private httpClient: HttpClient) { }
  addRegister(register:Inewdoctor){
    this.httpClient.post<Inewdoctor>("https://localhost:44348/api/NewDoctorRegisters",register,{
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    }).subscribe(result=> console.log("Done"));
   }
   getAlldoctor(){
    return this.httpClient.get<Inewdoctor[]>("https://localhost:44348/api/NewDoctorRegisters",{
          headers:{
            "Access-Control-Allow-Origin":"*"
          }
  
  
        });
  
}
}
