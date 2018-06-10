import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicFaultsListComponent } from './mechanic-faults-list.component';

describe('MechanicFaultsListComponent', () => {
  let component: MechanicFaultsListComponent;
  let fixture: ComponentFixture<MechanicFaultsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicFaultsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicFaultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
