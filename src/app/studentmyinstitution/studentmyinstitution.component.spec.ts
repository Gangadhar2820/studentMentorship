import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentmyinstitutionComponent } from './studentmyinstitution.component';

describe('StudentmyinstitutionComponent', () => {
  let component: StudentmyinstitutionComponent;
  let fixture: ComponentFixture<StudentmyinstitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentmyinstitutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentmyinstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
