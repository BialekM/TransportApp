import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFaultsComponent } from './car-faults.component';

describe('CarFaultsComponent', () => {
  let component: CarFaultsComponent;
  let fixture: ComponentFixture<CarFaultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarFaultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarFaultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
