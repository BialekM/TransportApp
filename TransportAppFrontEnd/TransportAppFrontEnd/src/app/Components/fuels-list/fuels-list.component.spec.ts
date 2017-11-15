import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelsListComponent } from './fuels-list.component';

describe('FuelsListComponent', () => {
  let component: FuelsListComponent;
  let fixture: ComponentFixture<FuelsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
