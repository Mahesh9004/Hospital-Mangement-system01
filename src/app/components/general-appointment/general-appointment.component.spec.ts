import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralAppointmentComponent } from './general-appointment.component';

describe('GeneralAppointmentComponent', () => {
  let component: GeneralAppointmentComponent;
  let fixture: ComponentFixture<GeneralAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
