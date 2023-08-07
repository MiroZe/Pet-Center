import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationCalculatorComponent } from './location-calculator.component';

describe('LocationCalculatorComponent', () => {
  let component: LocationCalculatorComponent;
  let fixture: ComponentFixture<LocationCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationCalculatorComponent]
    });
    fixture = TestBed.createComponent(LocationCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
