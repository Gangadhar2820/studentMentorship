import { TestBed } from '@angular/core/testing';

import { StudentProfileLoaderService } from './student-profile-loader.service';

describe('StudentProfileLoaderService', () => {
  let service: StudentProfileLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentProfileLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
