import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  visible: boolean;
  patient: boolean;
  doctor: boolean;
  admin:boolean;

  constructor() { this.visible = false; this.patient = false; this.doctor= false; this.admin = false;}

  hide() { this.visible = false;  }

  show() { this.visible = true;  }

  toggle() { this.visible = !this.visible; }

  hidePatient(){this.patient = false;}
  showPatient(){this.patient = true;}

  hideDoctor(){this.doctor = false;}
  showDoctor(){this.doctor = true;}

  hideAdmin(){this.admin = false;}
  showAdmin(){this.admin = true;}
  
}
