import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindtestComponent } from './bindtest.component';

describe('BindtestComponent', () => {
  let component: BindtestComponent;
  let fixture: ComponentFixture<BindtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
