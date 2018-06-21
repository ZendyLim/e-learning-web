import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateContentComponent } from './corporate-content.component';

describe('CorporateContentComponent', () => {
  let component: CorporateContentComponent;
  let fixture: ComponentFixture<CorporateContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
