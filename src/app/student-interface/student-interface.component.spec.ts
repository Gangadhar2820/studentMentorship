import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInterfaceComponent } from './student-interface.component';

describe('StudentInterfaceComponent', () => {
  let component: StudentInterfaceComponent;
  let fixture: ComponentFixture<StudentInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
