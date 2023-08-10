import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentormystudentsComponent } from './mentormystudents.component';

describe('MentormystudentsComponent', () => {
  let component: MentormystudentsComponent;
  let fixture: ComponentFixture<MentormystudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentormystudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentormystudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
