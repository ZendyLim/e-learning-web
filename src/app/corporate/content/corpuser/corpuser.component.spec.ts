import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpuserComponent } from './Corpuser.component';

describe('CorpuserComponent', () => {
  let component: CorpuserComponent;
  let fixture: ComponentFixture<CorpuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorpuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
