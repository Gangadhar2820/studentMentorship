import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentmyprofileComponent } from './studentmyprofile.component';

describe('StudentmyprofileComponent', () => {
  let component: StudentmyprofileComponent;
  let fixture: ComponentFixture<StudentmyprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentmyprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentmyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
