import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PendingVaccinationAppointmentComponent } from './pending-vaccination-appointment.component';

describe('PendingVaccinationAppointmentComponent', () => {
  let component: PendingVaccinationAppointmentComponent;
  let fixture: ComponentFixture<PendingVaccinationAppointmentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingVaccinationAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingVaccinationAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
