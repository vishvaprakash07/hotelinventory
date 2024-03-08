import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { loginloadGuard } from './loginload.guard';

describe('loginloadGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loginloadGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
