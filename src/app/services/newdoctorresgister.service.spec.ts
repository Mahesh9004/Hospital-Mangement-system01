import { TestBed } from '@angular/core/testing';

import { NewdoctorresgisterService } from './newdoctorresgister.service';

describe('NewdoctorresgisterService', () => {
  let service: NewdoctorresgisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewdoctorresgisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
