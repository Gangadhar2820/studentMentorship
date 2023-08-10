import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentormyprofileComponent } from './mentormyprofile.component';

describe('MentormyprofileComponent', () => {
  let component: MentormyprofileComponent;
  let fixture: ComponentFixture<MentormyprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentormyprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentormyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
