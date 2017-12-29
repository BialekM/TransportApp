import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourveyComponent } from './sourvey.component';

describe('SourveyComponent', () => {
  let component: SourveyComponent;
  let fixture: ComponentFixture<SourveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
