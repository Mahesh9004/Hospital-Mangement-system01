import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllpatientComponent } from './allpatient.component';

describe('AllpatientComponent', () => {
  let component: AllpatientComponent;
  let fixture: ComponentFixture<AllpatientComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllpatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
