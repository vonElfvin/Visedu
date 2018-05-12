import { Component, OnInit } from '@angular/core';
import { ProblemService } from '../shared/problem.service';
import { Problem, ProblemArea } from '../shared/problem.model';
import { Observable } from 'rxjs/Observable';
import { MatChip } from '@angular/material';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.scss']
})
export class ProblemListComponent implements OnInit {

  filterOptions = [
    {
      name: 'Kluring',
      type: ProblemArea.tricky_question,
      selected: true,
      color: 'warn'
    },
    {
      name: 'Färdighetsproblem',
      type: ProblemArea.skill_training,
      selected: true,
      color: 'primary'
    },
    {
      name: 'Problem i kontext',
      type: ProblemArea.problem_solving,
      selected: true,
      color: 'accent'
    }
  ];

  problems: Observable<Problem[]>;

  constructor(
    private problemService: ProblemService
  ) { }

  ngOnInit() {
    this.problems = this.problemService.getProblems();
  }

  filter(value) {
    console.log(value);
  }

}
