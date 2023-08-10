import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentacademicyearComponent } from './studentacademicyear.component';

describe('StudentacademicyearComponent', () => {
  let component: StudentacademicyearComponent;
  let fixture: ComponentFixture<StudentacademicyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentacademicyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentacademicyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
