import { Component, OnInit } from '@angular/core';
import { ProblemService } from '../shared/problem.service';
import { Observable } from 'rxjs/Observable';
import { Problem } from '../shared/problem.model';
import { CompletedProblemService } from '../shared/completed-problem.service';
import { CompletedProblem } from '../shared/completed-problem.model';
import { StudentService } from '../../students/shared/student.service';
import { UserService } from '../../users/shared/user.service';

@Component({
  selector: 'app-problems-demo',
  templateUrl: './problems-demo.component.html',
  styleUrls: ['./problems-demo.component.scss']
})
export class ProblemsDemoComponent implements OnInit {

  problems: Observable<Problem[]>;
  completedProblems: Observable<CompletedProblem[]>;

  constructor(
    private problemService: ProblemService,
    private studentService: StudentService,
    private userService: UserService,
    private completedProblemsService: CompletedProblemService,
  ) { }

  ngOnInit() {
    this.problems = this.problemService.getProblems();
    this.completedProblems = this.completedProblemsService.completedProblems;
  }

}
