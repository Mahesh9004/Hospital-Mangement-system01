import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DoctorregistrationComponent } from './doctorregistration.component';

describe('DoctorregistrationComponent', () => {
  let component: DoctorregistrationComponent;
  let fixture: ComponentFixture<DoctorregistrationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
