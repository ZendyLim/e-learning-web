import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmingabComponent } from './admingab.component';

describe('AdmingabComponent', () => {
  let component: AdmingabComponent;
  let fixture: ComponentFixture<AdmingabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmingabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmingabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
