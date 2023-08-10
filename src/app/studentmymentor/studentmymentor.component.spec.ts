import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentmymentorComponent } from './studentmymentor.component';

describe('StudentmymentorComponent', () => {
  let component: StudentmymentorComponent;
  let fixture: ComponentFixture<StudentmymentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentmymentorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentmymentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
