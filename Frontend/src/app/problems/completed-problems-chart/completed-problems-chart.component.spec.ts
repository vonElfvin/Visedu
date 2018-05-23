import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedProblemsChartComponent } from './completed-problems-chart.component';

describe('CompletedProblemsChartComponent', () => {
  let component: CompletedProblemsChartComponent;
  let fixture: ComponentFixture<CompletedProblemsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedProblemsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedProblemsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
