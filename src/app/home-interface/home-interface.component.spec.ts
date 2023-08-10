import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInterfaceComponent } from './home-interface.component';

describe('HomeInterfaceComponent', () => {
  let component: HomeInterfaceComponent;
  let fixture: ComponentFixture<HomeInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
