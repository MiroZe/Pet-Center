import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PawsLoaderComponent } from './paws-loader.component';

describe('PawsLoaderComponent', () => {
  let component: PawsLoaderComponent;
  let fixture: ComponentFixture<PawsLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PawsLoaderComponent]
    });
    fixture = TestBed.createComponent(PawsLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
