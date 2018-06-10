import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicAddFaultComponent } from './mechanic-add-fault.component';

describe('MechanicAddFaultComponent', () => {
  let component: MechanicAddFaultComponent;
  let fixture: ComponentFixture<MechanicAddFaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicAddFaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicAddFaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
