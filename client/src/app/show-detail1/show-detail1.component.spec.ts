import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetail1Component } from './show-detail1.component';

describe('ShowDetail1Component', () => {
  let component: ShowDetail1Component;
  let fixture: ComponentFixture<ShowDetail1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDetail1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetail1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
