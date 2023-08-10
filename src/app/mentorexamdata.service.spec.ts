import { TestBed } from '@angular/core/testing';

import { MentorexamdataService } from './mentorexamdata.service';

describe('MentorexamdataService', () => {
  let service: MentorexamdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentorexamdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
