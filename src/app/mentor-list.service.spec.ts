import { TestBed } from '@angular/core/testing';

import { MentorListService } from './mentor-list.service';

describe('MentorListService', () => {
  let service: MentorListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentorListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
