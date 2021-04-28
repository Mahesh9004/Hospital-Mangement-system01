import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { LoginComponent } from 'src/app/components/login/login.component';


@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  visible: boolean;
  patient: boolean;
  doctor: boolean;
  admin:boolean;
  welcome: boolean;

  home: boolean;
  countries: boolean;
  vaccination: boolean;
  testappointment: boolean;
  profile: boolean;
  private testlogin : LoginComponent;

  constructor() { this.visible = false; this.patient = false; this.doctor= false; this.admin = false; this.home = false;
                                this.countries = false; this.vaccination = false; this.testappointment = false; this.profile = false;
                                this.welcome = false;
                                  }

  hide() { this.visible = false;  }

  show() { this.visible = true;  }

  toggle() { this.visible = !this.visible; }

  hidePatient(){this.patient = false;}
  showPatient(){this.patient = true;}

  hideDoctor(){this.doctor = false;}
  showDoctor(){this.doctor = true;}

  hideAdmin(){this.admin = false;}
  showAdmin(){this.admin = true;}

  hideHome(){ this.home = false;}
  showHome(){this.home = true;}

  hideCountries(){ this.countries = false;}
  showCountries(){ this.countries = true;}

  hideVaccination(){ this.vaccination = false;}
  showVaccination(){ this.vaccination = true;}

  hideTestAppointment(){ this.testappointment = false;}
  showTestAppointment(){ this.testappointment = true;}

  hideProfile(){ this.profile = false;}
  showProfile(){ this.profile = true;}

  hideWelcome(){ this.welcome = false;}
  showWelcome(){ this.welcome = true;}







  
  
}
