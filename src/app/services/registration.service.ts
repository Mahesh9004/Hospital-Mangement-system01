import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/user';
import { Doctor } from 'src/doctor';
import { Vaccine } from 'src/vaccine';
import { General } from 'src/app/general';
import { Bill } from 'src/app/bill';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  result: String;
  
  
  constructor(private _http: HttpClient) { 
  
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
    return this._http.post<any>("http://localhost:8080/vaccinationRegister",v);
  }

  public generalAppointmentFromRemote(general:General):Observable<any>{
    return this._http.post<any>("http://localhost:8080/generalappointment",general);
  }


  public confirmAppointment(v:Vaccine):Observable<any>{
    return this._http.post<String>("http://localhost:8080/vaccination",v);


  public saveBillFromRemote(b: Bill):Observable<any>{
    return this._http.post<any>("http://localhost:8080/bill",b);
  }

  
 
  //get methods
  public confirmAppointment(v:Vaccine):Observable<any>{
    let headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this._http.get<any>('http://localhost:8080/vaccination/'+v, {headers:headers} );

  }
 





  //get methods
  public saveBillFromRemote(b: Bill):Observable<any>{
    return this._http.post<any>("http://localhost:8080/bill",b);


  public vaccinePendingAppointments():Observable<any>{
    return this._http.get<any>("http://localhost:8080/vaccinependingappointments");

  }


  public patientBillHistory():Observable<any>{
    return this._http.get<any>("http://localhost:8080/billhistory");
  }


  


  public pendingAppointment():Observable<any>{
    return this._http.get<any>("http://localhost:8080/pendingappointment");
  }
}
