import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorexternalsComponent } from './mentorexternals.component';

describe('MentorexternalsComponent', () => {
  let component: MentorexternalsComponent;
  let fixture: ComponentFixture<MentorexternalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorexternalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorexternalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
