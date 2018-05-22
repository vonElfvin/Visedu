import { Component, OnInit } from '@angular/core';
import { ProblemService } from '../shared/problem.service';
import { Observable } from 'rxjs/Observable';
import { Problem } from '../shared/problem.model';
import { Filter } from '../shared/filter.model';
import { StudentService } from '../../students/shared/student.service';
import { UserService } from '../../users/shared/user.service';

@Component({
  selector: 'app-problems-demo',
  templateUrl: './problems-demo.component.html',
  styleUrls: ['./problems-demo.component.scss']
})
export class ProblemsDemoComponent implements OnInit {

  problems: Observable<Problem[]>;
  filterOptions: Filter[] = this.problemService.filterOptions;

  constructor(
    private problemService: ProblemService,
    private studentService: StudentService,
  ) { }

  ngOnInit() {
    this.problems = this.problemService.getProblems();
    this.studentService.student.subscribe(student => {
      console.log(student);
    });
  }

}
