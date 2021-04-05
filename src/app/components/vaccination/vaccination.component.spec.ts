import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VaccinationComponent } from './vaccination.component';

describe('VaccinationComponent', () => {
  let component: VaccinationComponent;
  let fixture: ComponentFixture<VaccinationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
