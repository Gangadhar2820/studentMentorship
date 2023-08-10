import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentormyinstitutionComponent } from './mentormyinstitution.component';

describe('MentormyinstitutionComponent', () => {
  let component: MentormyinstitutionComponent;
  let fixture: ComponentFixture<MentormyinstitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentormyinstitutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentormyinstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
