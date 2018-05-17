import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemsDemoComponent } from './problems-demo.component';

describe('ProblemsDemoComponent', () => {
  let component: ProblemsDemoComponent;
  let fixture: ComponentFixture<ProblemsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
