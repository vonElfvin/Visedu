import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../shared/student.model';
import { StudentService } from '../shared/student.service';
import { ProblemArea } from '../../problems/shared/problem.model';
import { Observable } from 'rxjs/Observable';
import { ClassService } from '../../classes/shared/class.service';
import { Class } from '../../classes/shared/class.model';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})
export class StudentPageComponent implements OnInit {

  student: Observable<Student>;
  class: Observable<Class>;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private classService: ClassService,
  ) {

  }

  ngOnInit() {
    const studentId = this.route.snapshot.queryParams.studentId;
    this.student = this.studentService.getStudent(studentId);
    this.class = this.student.switchMap(student => {
      if (student) {
        return this.classService.getClassWithCode(student.classCode);
      } else {
        return Observable.of(null);
      }
    });
  }

}
