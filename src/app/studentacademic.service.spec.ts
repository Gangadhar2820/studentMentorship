import { TestBed } from '@angular/core/testing';

import { StudentacademicService } from './studentacademic.service';

describe('StudentacademicService', () => {
  let service: StudentacademicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentacademicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
