import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctorlogin } from './doctorlogin';
@Injectable({
  providedIn: 'root'
})
export class DoctorloginService {


  constructor(private httpClient: HttpClient) { }
  addDoctorlogin(login: any): Observable<any> {

    return this.httpClient.post<Doctorlogin>('https://localhost:44348/api/Doctorlogins', login, {

      headers: {

        "Access-Control-Allow-Origin": "*"

      }

    });
    

  }

}
