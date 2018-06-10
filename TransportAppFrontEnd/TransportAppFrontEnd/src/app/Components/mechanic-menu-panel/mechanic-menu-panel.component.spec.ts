import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicMenuPanelComponent } from './mechanic-menu-panel.component';

describe('MechanicmenuPanelComponent', () => {
  let component: MechanicMenuPanelComponent;
  let fixture: ComponentFixture<MechanicMenuPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicMenuPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicMenuPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
