import { TestBed } from '@angular/core/testing';

import { StudentValidationGuard } from './student-validation.guard';

describe('StudentValidationGuard', () => {
  let guard: StudentValidationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StudentValidationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
