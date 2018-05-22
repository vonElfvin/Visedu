import { Component, OnInit } from '@angular/core';
import { ProblemService } from '../shared/problem.service';
import { Observable } from 'rxjs/Observable';
import { Problem } from '../shared/problem.model';
import { Filter } from '../shared/filter.model';
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
  filterOptions: Filter[] = this.problemService.filterOptions;

  constructor(
    private problemService: ProblemService,
    private studentService: StudentService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.problems = this.problemService.getProblems();
    console.log('bajj');
    this.studentService.student.subscribe(student => {
      console.log(student);
    });
    // this.userService.user.subscribe(user => {
    //   console.log(user);
    //   if (user) {
    //     this.studentService.getStudent(user._id).subscribe(student => {
    //       console.log('student is', student);
    //       this.completedProblems = this.completedProblemService.getCompletedProblems(student._id);
    //     });
    //   }
    // });
  }

}
