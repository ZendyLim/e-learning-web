import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserIndexAddComponent } from './admin-user-index-add.component';

describe('AdminUserIndexAddComponent', () => {
  let component: AdminUserIndexAddComponent;
  let fixture: ComponentFixture<AdminUserIndexAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserIndexAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserIndexAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
