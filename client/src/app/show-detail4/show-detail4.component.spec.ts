import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetail4Component } from './show-detail4.component';

describe('ShowDetail4Component', () => {
  let component: ShowDetail4Component;
  let fixture: ComponentFixture<ShowDetail4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDetail4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetail4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
