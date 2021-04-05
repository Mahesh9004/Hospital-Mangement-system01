import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AlldoctorComponent } from './alldoctor.component';

describe('AlldoctorComponent', () => {
  let component: AlldoctorComponent;
  let fixture: ComponentFixture<AlldoctorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlldoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlldoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
