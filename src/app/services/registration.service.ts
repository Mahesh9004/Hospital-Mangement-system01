import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/user';
import { Doctor } from 'src/doctor';
import { Vaccine } from 'src/vaccine';
import { General } from 'src/app/general';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  result: String;
  
  
  constructor(private _http: HttpClient) { 
  
  }

  createAuthorizationHeader(headers: HttpHeaders) {
    headers.set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods',' GET, POST, PATCH, PUT, DELETE, OPTIONS');
  }
  //post methods
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

  public generalAppointmentFromRemote(general:General):Observable<any>{
    return this._http.post<any>("http://localhost:8080/generalappointment",general);
  }

  

  
  //get methods
  public confirmAppointment(v:Vaccine):Observable<any>{
    let headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this._http.get<any>("http://localhost:8080/vaccination/"+v, {headers:headers} );
  }





  public pendingAppointment():Observable<any>{
    return this._http.get<any>("http://localhost:8080/pendingappointment");
  }
}
