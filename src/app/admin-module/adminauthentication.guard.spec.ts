import { TestBed } from '@angular/core/testing';

import { AdminauthenticationGuard } from './adminauthentication.guard';

describe('AdminauthenticationGuard', () => {
  let guard: AdminauthenticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminauthenticationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
