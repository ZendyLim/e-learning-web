import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserAddButtonComponent } from './admin-user-add-button.component';

describe('AdminUserAddButtonComponent', () => {
  let component: AdminUserAddButtonComponent;
  let fixture: ComponentFixture<AdminUserAddButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserAddButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserAddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
