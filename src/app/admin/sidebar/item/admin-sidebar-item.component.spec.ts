import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSidebarItemComponent } from './admin-sidebar-item.component';

describe('AdminSidebarItemComponent', () => {
  let component: AdminSidebarItemComponent;
  let fixture: ComponentFixture<AdminSidebarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSidebarItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSidebarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
