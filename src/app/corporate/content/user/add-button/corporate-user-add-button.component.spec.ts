import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateUserAddButtonComponent } from './corporate-user-add-button.component';

describe('CorporateUserAddButtonComponent', () => {
  let component: CorporateUserAddButtonComponent;
  let fixture: ComponentFixture<CorporateUserAddButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateUserAddButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateUserAddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
