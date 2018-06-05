import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateSidebarComponent } from './corporate-sidebar.component';

describe('CorporateSidebarComponent', () => {
  let component: CorporateSidebarComponent;
  let fixture: ComponentFixture<CorporateSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
