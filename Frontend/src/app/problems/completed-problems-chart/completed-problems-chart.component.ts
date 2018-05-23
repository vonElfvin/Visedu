import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../../students/shared/student.model';
import { ProblemArea } from '../shared/problem.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-completed-problems-chart',
  templateUrl: './completed-problems-chart.component.html',
  styleUrls: ['./completed-problems-chart.component.scss']
})
export class CompletedProblemsChartComponent implements OnInit {

  @Input() student: Observable<Student>;

  data: any;
  showXAxis = true;
  colorScheme = { domain: ['#8E24AA'] };

  constructor() { }

  ngOnInit() {
    this.student.subscribe(student => {
      this.data = [
        {
          name: `${student.user.firstName} ${student.user.lastName}`,
          series: [
            {
              name: 'Problem i kontext',
              value: student.total_problems.problem_solving,
            },
            {
              name: 'Färdighetsproblem',
              value: student.total_problems.skill_training,
            },
            {
              name: 'Kluringar',
              value: student.total_problems.tricky_question,
            },
          ],
        },
      ];
    });
  }

}
