import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDetailsBookComponent } from './modify-details-book.component';

describe('ModifyDetailsBookComponent', () => {
  let component: ModifyDetailsBookComponent;
  let fixture: ComponentFixture<ModifyDetailsBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyDetailsBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyDetailsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
