import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDetailsBookComponent } from './display-details-book.component';

describe('DisplayDetailsBookComponent', () => {
  let component: DisplayDetailsBookComponent;
  let fixture: ComponentFixture<DisplayDetailsBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDetailsBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDetailsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
