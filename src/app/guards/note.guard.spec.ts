import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { noteGuard } from './note.guard';

describe('noteGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => noteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
