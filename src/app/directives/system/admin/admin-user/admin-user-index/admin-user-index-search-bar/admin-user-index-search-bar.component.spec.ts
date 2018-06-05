import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserIndexSearchBarComponent } from './admin-user-index-search-bar.component';

describe('AdminUserIndexSearchBarComponent', () => {
  let component: AdminUserIndexSearchBarComponent;
  let fixture: ComponentFixture<AdminUserIndexSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserIndexSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserIndexSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
