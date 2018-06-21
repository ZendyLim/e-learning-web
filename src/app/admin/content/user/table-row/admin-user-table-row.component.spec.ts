import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserTableRowComponent } from './admin-user-table-row.component';

describe('AdminUserTableRowComponent', () => {
  let component: AdminUserTableRowComponent;
  let fixture: ComponentFixture<AdminUserTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
