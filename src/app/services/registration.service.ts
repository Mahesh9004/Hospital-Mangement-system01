import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from 'src/user';
import { Doctor } from 'src/doctor';
import { Vaccine } from 'src/vaccine';
import { General } from 'src/app/general';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  
  constructor(private _http: HttpClient) { 
  
  }

  public loginUserFromRemote(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/login",user);
  }

  public loginDoctorFromRemote(doctor:Doctor):Observable<any>{
    return this._http.post<any>("http://localhost:8080/logindoctor",doctor);
  }

  public registerUserFromRemote(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/registeruser",user);
  }

  public registerDoctorFromRemote(doctor:Doctor):Observable<any>{
    return this._http.post<any>("http://localhost:8080/registerdoctor",doctor);
  }

  public registerVaccineAppointment(v:Vaccine):Observable<any>{
    return this._http.post<any>("http://localhost:8080/vaccination",v);
  }


  public confirmAppointment():Observable<any>{
    return this._http.get<any>("http://localhost:8080/vaccination");
  }

  public generalAppointmentFromRemote(general:General):Observable<any>{
    return this._http.post<any>("http://localhost:8080/generalappointment",general);
  }

  public pendingAppointment():Observable<any>{
    return this._http.get<any>("http://localhost:8080/pendingappointment");
  }

  


}
