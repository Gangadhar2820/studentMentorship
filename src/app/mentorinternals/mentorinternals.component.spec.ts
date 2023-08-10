import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorinternalsComponent } from './mentorinternals.component';

describe('MentorinternalsComponent', () => {
  let component: MentorinternalsComponent;
  let fixture: ComponentFixture<MentorinternalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorinternalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorinternalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
