import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCarsComponent } from './main-cars.component';

describe('MainCarsComponent', () => {
  let component: MainCarsComponent;
  let fixture: ComponentFixture<MainCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
