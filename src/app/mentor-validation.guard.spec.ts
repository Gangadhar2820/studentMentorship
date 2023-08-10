import { TestBed } from '@angular/core/testing';

import { MentorValidationGuard } from './mentor-validation.guard';

describe('MentorValidationGuard', () => {
  let guard: MentorValidationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MentorValidationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
