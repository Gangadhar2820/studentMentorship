import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorattendanceComponent } from './mentorattendance.component';

describe('MentorattendanceComponent', () => {
  let component: MentorattendanceComponent;
  let fixture: ComponentFixture<MentorattendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorattendanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
