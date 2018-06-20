import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAnalyticComponent } from './admin-analytic.component';

describe('AdminAnalyticComponent', () => {
  let component: AdminAnalyticComponent;
  let fixture: ComponentFixture<AdminAnalyticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAnalyticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAnalyticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
