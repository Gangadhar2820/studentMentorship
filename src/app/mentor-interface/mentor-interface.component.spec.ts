import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorInterfaceComponent } from './mentor-interface.component';

describe('MentorInterfaceComponent', () => {
  let component: MentorInterfaceComponent;
  let fixture: ComponentFixture<MentorInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
