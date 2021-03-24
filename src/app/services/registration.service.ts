import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/user';

import { Vaccine } from 'src/vaccine';



import { General } from 'src/app/general';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  visible: boolean;
  constructor(private _http: HttpClient) { }

  public loginUserFromRemote(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/login",user);
  }

  public registerUserFromRemote(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/registeruser",user);
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

  hide() { this.visible = false; }

  show() { this.visible = true; }

}
