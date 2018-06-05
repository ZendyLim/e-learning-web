import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateSidebarItemComponent } from './corporate-sidebar-item.component';

describe('CorporateSidebarItemComponent', () => {
  let component: CorporateSidebarItemComponent;
  let fixture: ComponentFixture<CorporateSidebarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateSidebarItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateSidebarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
