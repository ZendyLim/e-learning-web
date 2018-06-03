import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserIndexTableComponent } from './admin-user-index-table.component';

describe('AdminUserIndexTableComponent', () => {
  let component: AdminUserIndexTableComponent;
  let fixture: ComponentFixture<AdminUserIndexTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserIndexTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserIndexTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
