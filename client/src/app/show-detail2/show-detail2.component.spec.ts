import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetail2Component } from './show-detail2.component';

describe('ShowDetail2Component', () => {
  let component: ShowDetail2Component;
  let fixture: ComponentFixture<ShowDetail2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDetail2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
