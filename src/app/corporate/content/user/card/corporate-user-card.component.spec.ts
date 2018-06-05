import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateUserCardComponent } from './corporate-user-card.component';

describe('CorporateUserCardComponent', () => {
  let component: CorporateUserCardComponent;
  let fixture: ComponentFixture<CorporateUserCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateUserCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
