import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateUserAddModalComponent } from './corporate-user-add-modal.component';

describe('CorporateUserAddModalComponent', () => {
  let component: CorporateUserAddModalComponent;
  let fixture: ComponentFixture<CorporateUserAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateUserAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateUserAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
