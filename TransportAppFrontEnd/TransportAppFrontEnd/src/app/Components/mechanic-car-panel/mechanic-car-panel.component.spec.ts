import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicCarPanelComponent } from './mechanic-car-panel.component';

describe('MechanicCarPanelComponent', () => {
  let component: MechanicCarPanelComponent;
  let fixture: ComponentFixture<MechanicCarPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicCarPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicCarPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
