import { Component, OnInit } from '@angular/core';
import { ProblemService } from '../shared/problem.service';
import { Problem } from '../shared/problem.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.scss']
})
export class ProblemListComponent implements OnInit {

  problems: Observable<Problem[]>;

  constructor(
    private problemService: ProblemService
  ) { }

  ngOnInit() {
    this.problems = this.problemService.getProblems();
  }

}
