import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateAnalyticComponent } from './corporate-analytic.component';

describe('CorporateAnalyticComponent', () => {
  let component: CorporateAnalyticComponent;
  let fixture: ComponentFixture<CorporateAnalyticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateAnalyticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateAnalyticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
