import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorMenuPanelComponent } from './administrator-menu-panel.component';

describe('AdministratorMenuPanelComponent', () => {
  let component: AdministratorMenuPanelComponent;
  let fixture: ComponentFixture<AdministratorMenuPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorMenuPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorMenuPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
