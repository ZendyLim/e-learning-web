import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateUserEditModalComponent } from './corporate-user-Edit-modal.component';

describe('CorporateUserEditModalComponent', () => {
  let component: CorporateUserEditModalComponent;
  let fixture: ComponentFixture<CorporateUserEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateUserEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateUserEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
