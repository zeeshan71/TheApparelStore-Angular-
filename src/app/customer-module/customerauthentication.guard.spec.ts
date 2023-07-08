import { TestBed } from '@angular/core/testing';

import { CustomerauthenticationGuard } from './customerauthentication.guard';

describe('CustomerauthenticationGuard', () => {
  let guard: CustomerauthenticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CustomerauthenticationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
