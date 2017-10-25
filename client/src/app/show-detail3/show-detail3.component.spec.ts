import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetail3Component } from './show-detail3.component';

describe('ShowDetail3Component', () => {
  let component: ShowDetail3Component;
  let fixture: ComponentFixture<ShowDetail3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDetail3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetail3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
