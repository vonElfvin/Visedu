import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemTestComponent } from './problem-test.component';

describe('ProblemTestComponent', () => {
  let component: ProblemTestComponent;
  let fixture: ComponentFixture<ProblemTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
