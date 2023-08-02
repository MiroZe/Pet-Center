import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { unAuthGuardGuard } from './un-auth-guard.guard';

describe('unAuthGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => unAuthGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
