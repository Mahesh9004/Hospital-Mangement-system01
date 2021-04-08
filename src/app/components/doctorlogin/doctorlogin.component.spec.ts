import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DoctorloginComponent } from './doctorlogin.component';

describe('DoctorloginComponent', () => {
  let component: DoctorloginComponent;
  let fixture: ComponentFixture<DoctorloginComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
